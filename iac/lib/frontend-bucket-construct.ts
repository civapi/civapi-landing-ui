import { Construct } from 'constructs'
import { CfnOutput, RemovalPolicy } from 'aws-cdk-lib'
import { BlockPublicAccess, Bucket } from 'aws-cdk-lib/aws-s3'

export class FrontendBucketConstruct extends Construct {
  public readonly bucket: Bucket

  constructor(scope: Construct, envName: string) {
    super(scope, 'FrontendBucketConstruct')

    this.bucket = new Bucket(this, 'LandingPageAppBucket', {
      bucketName: `landing-page-web-bucket-${envName}`,
      autoDeleteObjects: true,
      blockPublicAccess: BlockPublicAccess.BLOCK_ALL,
      removalPolicy: RemovalPolicy.DESTROY
    })

    new CfnOutput(this, 'LandingPageAppBucketName', {
      value: this.bucket.bucketName,
      description: 'Bucket holding landing page app frontend app assets',
      exportName: 'LandingPageAppBucketName'
    })
  }
}
