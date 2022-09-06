# Google Fonts Checker

## Local Building

### Requirements

- at least Node V16
- [AWS CLI](https://docs.aws.amazon.com/cli/)
- [AWSUME](https://awsu.me)

### Build

#### Install Javascript-Dependencies

Simply trigger

`npm install`

#### Starting it locally

`docker-compose -p google-fonts-checker up -d`

#### Stopping it locally

`docker-compose -p google-fonts-checker down`

## Infrastructure as Code / Deployment to AWS

### Requirements

- Node V12
- [AWS CDK as gloabl NPM](https://docs.aws.amazon.com/cdk/latest/guide/getting_started.html])
- NPM
- Docker
- Docker Compose

### Install needed AWS things

- [Download](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html) and [configure](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html) the AWS CLI. Once you have done the installation you should have your AWS Access Key Id and AWS Secret Access Key. If you don't have one you need to generate one with your user logged in into AWS Console and go [here](https://console.aws.amazon.com/iam/home#/users/t.koenig?section=security_credentials) for example.
- Once you have installed and configured the AWS Cli you should put your aws keys credentials in the file $HOME/.aws/credentails and name it with a profile, like checker-developer for example. It should like this

`[checker-developer]`

`aws_access_key_id = <YOUR AWS KEY ID GOES HERE>`

`aws_secret_access_key = <YOUR AWS SECRET ACCESS KEY GOES HERE>`

- Once you have installed [AWSUME](https://awsu.me) you should try it with

`awsume checker-developer`

on your console. You should face no error.

- Check if everything is fine with

`aws s3 ls`

and you should face no error but get a list of all the existing s3 buckets in your account.

### AWS CDK Deployment

#### Mail / SES

The AWS Simple Email Service (SES) is done **manually**. The script expects an email verified identify of 'info@illusion-factory.de' in the same account.

#### Deployment

- `awsume checker-deployer`
- `cdk deploy gf-checker-ec2 --require-approval never`

## Automatic Deployment using GitHub Actions

GitHub Actions are used to do an automatic deployment. Every push into the any branch ends on a deployment for checker.illusion-factory.de automatically.

The GitHub-Actions configuration can be found [here](.github/workflows/main.yml).
