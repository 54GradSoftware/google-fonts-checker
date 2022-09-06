import * as cdk from 'aws-cdk-lib'
import {KeyPair} from 'cdk-ec2-key-pair'
import {readFileSync} from "fs";
import {AmazonLinuxCpuType} from "aws-cdk-lib/aws-ec2";

class Checker extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    let domainName = 'j862b35p6sbw.illusion-factory.de';

    const route53Zone = new cdk.aws_route53.HostedZone(this, 'gf-checkerBackendRoute53Zone', {
      zoneName: domainName,
    });
    const ns = cdk.Fn.join(',', route53Zone.hostedZoneNameServers!!);
    new cdk.CfnOutput(this, 'Used NameServers', { value: ns });

    const certificate = new cdk.aws_certificatemanager.DnsValidatedCertificate(this, 'gf-checkerSiteCertificateWildcard', {
      domainName: '*.' + domainName,
      hostedZone: route53Zone,
      subjectAlternativeNames: [domainName],
    });

    // Create VPC
    const vpc = new cdk.aws_ec2.Vpc(this, 'gf-checkerEC2AppVPC', { maxAzs: 2 });

    const gfCheckerSG = new cdk.aws_ec2.SecurityGroup(this, 'gf-checker-sg', {
      vpc,
      allowAllOutbound: true,
    });

    gfCheckerSG.addIngressRule(
        cdk.aws_ec2.Peer.anyIpv4(),
        cdk.aws_ec2.Port.tcp(22),
        'allow SSH access from anywhere',
    );
    gfCheckerSG.addIngressRule(
        cdk.aws_ec2.Peer.anyIpv4(),
        cdk.aws_ec2.Port.tcp(8080),
        'allow HTTP traffic from anywhere',
    );
    gfCheckerSG.addIngressRule(
        cdk.aws_ec2.Peer.anyIpv4(),
        cdk.aws_ec2.Port.tcp(443),
        'allow HTTPS traffic from anywhere',
    );

    const gfCheckerRole = new cdk.aws_iam.Role(this, 'gf-checker-role', {
      assumedBy: new cdk.aws_iam.ServicePrincipal('ec2.amazonaws.com'),
    });
    gfCheckerRole.addManagedPolicy(cdk.aws_iam.ManagedPolicy.fromAwsManagedPolicyName('AmazonSSMManagedInstanceCore'))

    let keyName = 'gf-checker-ec2-keypair';
    // Create a Key Pair to be used with this EC2 Instance
    const key = new KeyPair(this, 'KeyPair', {
        name: keyName,
        description: 'Key Pair created with CDK Deployment',
    });

    const asg = new cdk.aws_autoscaling.AutoScalingGroup(this, 'gf-checker-ec2-asg', {
      vpc,
      vpcSubnets: {
        subnetType: cdk.aws_ec2.SubnetType.PUBLIC,
      },
      role: gfCheckerRole,
      securityGroup: gfCheckerSG,
      instanceType: cdk.aws_ec2.InstanceType.of(
          cdk.aws_ec2.InstanceClass.T4G,
          cdk.aws_ec2.InstanceSize.SMALL,
      ),
      machineImage: new cdk.aws_ec2.AmazonLinuxImage({
        generation: cdk.aws_ec2.AmazonLinuxGeneration.AMAZON_LINUX_2,
        cpuType: AmazonLinuxCpuType.ARM_64
      }),
      healthCheck: cdk.aws_autoscaling.HealthCheck.ec2(),
      keyName: keyName,
      maxCapacity: 1
    });
    const userDataScript = readFileSync('ec2-startup.sh', 'utf8');
    asg.addUserData(userDataScript);

    const lb = new cdk.aws_elasticloadbalancingv2.ApplicationLoadBalancer(this, 'gf-checkerLb', {
      vpc,
      internetFacing: true
    });

    const sslListener = lb.addListener('SSLGFCheckerListener', {
      protocol: cdk.aws_elasticloadbalancingv2.ApplicationProtocol.HTTPS,
      port: 443,
      certificates: [certificate]
    });
    sslListener.addTargets('SSLGFCheckerTargets', {
      port: 8080,
      targets: [asg],
      healthCheck: {
        path: '/',
        interval: cdk.Duration.seconds(30),
        healthyThresholdCount: 2
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

    new cdk.CfnOutput(this, 'Download SSH Key Command', { value: 'aws secretsmanager get-secret-value --secret-id ec2-ssh-key/gf-checker-ec2-keypair/private --query SecretString --output text > cdk-key.pem && chmod 400 cdk-key.pem' })

    let region = 'us-east-1';
    if (props && props.env && props.env.region) {
      region = props.env.region;
    }

    // The SES setup is done manually
    asg.addToRolePolicy(
      new cdk.aws_iam.PolicyStatement({
        effect: cdk.aws_iam.Effect.ALLOW,
        actions: [
          'ses:SendEmail',
          'ses:SendRawEmail',
          'ses:SendTemplatedEmail',
        ],
        resources: [
          `arn:aws:ses:${region}:${
            cdk.Stack.of(this).account
          }:identity/info@illusion-factory.de`,
        ],
      }),
    );

    new cdk.CfnOutput(this, "Used Region For SES", { value: String(region) });

  }
}

const app = new cdk.App();

new Checker(app, 'gf-checker-ec2', {
  env: {
    'account': '517050446332',
    'region': 'eu-central-1',
  },
});

app.synth();
