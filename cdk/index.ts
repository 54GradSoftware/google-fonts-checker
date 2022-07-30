import * as cdk from 'aws-cdk-lib'
import {readFileSync} from "fs";

class Checker extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    let domainName = 'checker.illusion-factory.de';

    // Create VPC
    const vpc = new cdk.aws_ec2.Vpc(this, 'CheckerFargateAppVPC', { maxAzs: 2 });

    const route53Zone = new cdk.aws_route53.HostedZone(this, 'checkerBackendRoute53Zone', {
      zoneName: domainName,
    });
    const ns = cdk.Fn.join(',', route53Zone.hostedZoneNameServers!!);
    new cdk.CfnOutput(this, 'Used NameServers', { value: ns });

    const certificate = new cdk.aws_certificatemanager.DnsValidatedCertificate(this, 'checkerSiteCertificateWildcard', {
      domainName: '*.' + domainName,
      hostedZone: route53Zone,
      subjectAlternativeNames: [domainName],
    });

    const checkerSG = new cdk.aws_ec2.SecurityGroup(this, 'checker-sg', {
      vpc,
      allowAllOutbound: true,
    });

    checkerSG.addIngressRule(
        cdk.aws_ec2.Peer.anyIpv4(),
        cdk.aws_ec2.Port.tcp(22),
        'allow SSH access from anywhere',
    );
    checkerSG.addIngressRule(
        cdk.aws_ec2.Peer.anyIpv4(),
        cdk.aws_ec2.Port.tcp(8080),
        'allow HTTP traffic from anywhere',
    );
    checkerSG.addIngressRule(
        cdk.aws_ec2.Peer.anyIpv4(),
        cdk.aws_ec2.Port.tcp(443),
        'allow HTTPS traffic from anywhere',
    );

    const checkerRole = new cdk.aws_iam.Role(this, 'checker-role', {
      assumedBy: new cdk.aws_iam.ServicePrincipal('ec2.amazonaws.com'),
    });
    checkerRole.addManagedPolicy(cdk.aws_iam.ManagedPolicy.fromAwsManagedPolicyName('AmazonSSMManagedInstanceCore'))

    // Create a Key Pair to be used with this EC2 Instance
    // Temporarily disabled since not compatible with AWS CDK 2 currently
    // const key = new cdk.aws_ec2.KeyPair(this, 'KeyPair', {
    //    name: 'checker-keypair',
    //    description: 'Key Pair created with CDK Deployment',
    // });
    // key.grantReadOnPublicKey
    // The aws key pair has to be created manually currently

    const asg = new cdk.aws_autoscaling.AutoScalingGroup(this, 'checker-ec2-asg', {
      vpc,
      vpcSubnets: {
        subnetType: cdk.aws_ec2.SubnetType.PUBLIC,
      },
      role: checkerRole,
      securityGroup: checkerSG,
      instanceType: cdk.aws_ec2.InstanceType.of(
          cdk.aws_ec2.InstanceClass.BURSTABLE2,
          cdk.aws_ec2.InstanceSize.MEDIUM,
      ),
      machineImage: new cdk.aws_ec2.AmazonLinuxImage({
        generation: cdk.aws_ec2.AmazonLinuxGeneration.AMAZON_LINUX_2,
      }),
      healthCheck: cdk.aws_autoscaling.HealthCheck.ec2(),
      keyName: 'checker-key-pair',
      maxCapacity: 1
    });
    const userDataScript = readFileSync('ec2-startup.sh', 'utf8');
    asg.addUserData(userDataScript);

    const lb = new cdk.aws_elasticloadbalancingv2.ApplicationLoadBalancer(this, 'checkerLb', {
      vpc,
      internetFacing: true
    });
    const sslListener = lb.addListener('SSLCheckerListener', {
      protocol: cdk.aws_elasticloadbalancingv2.ApplicationProtocol.HTTPS,
      port: 443,
      certificates: [certificate]
    });
    sslListener.addTargets('SSLCheckerTargets', {
      port: 8080,
      targets: [asg],
      healthCheck: {
        path: '/',
        interval: cdk.Duration.minutes(1)
      }
    });
    lb.addRedirect({
      sourcePort: 80,
      sourceProtocol: cdk.aws_elasticloadbalancingv2.ApplicationProtocol.HTTP,
      targetProtocol: cdk.aws_elasticloadbalancingv2.ApplicationProtocol.HTTPS,
      targetPort: 443,
    });

    new cdk.aws_route53.ARecord(this, 'Alias', {
      zone: route53Zone,
      target: cdk.aws_route53.RecordTarget.fromAlias(new cdk.aws_route53_targets.LoadBalancerTarget(lb)),
      recordName: ''
    })

    new cdk.CfnOutput(this, 'Download SSH Key Command', { value: 'aws secretsmanager get-secret-value --secret-id ec2-ssh-key/checker-keypair/private --query SecretString --output text > cdk-key.pem && chmod 400 cdk-key.pem' })

    let region = 'us-east-1';
    if (props && props.env && props.env.region) {
      region = props.env.region;
    }
    //
    // // The SES setup is done manually
    // fargateAppService.taskDefinition.taskRole.addToPrincipalPolicy(
    //   new iam.PolicyStatement({
    //     effect: iam.Effect.ALLOW,
    //     actions: [
    //       'ses:SendEmail',
    //       'ses:SendRawEmail',
    //       'ses:SendTemplatedEmail',
    //     ],
    //     resources: [
    //       `arn:aws:ses:${region}:${
    //         cdk.Stack.of(this).account
    //       }:identity/info@illusion-factory.de`,
    //     ],
    //   }),
    // );

  }
}

const app = new cdk.App();

new Checker(app, 'checker-fargate', {
  env: {
    'account': '517050446332',
    'region': 'eu-central-1',
  },
});

app.synth();
