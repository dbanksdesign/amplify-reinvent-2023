import { PolicyStatement } from 'aws-cdk-lib/aws-iam';
import { Code, FunctionRuntime } from 'aws-cdk-lib/aws-appsync';
import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource.js';
import { data } from './data/resource.js';

const backend = defineBackend({
  auth,
  data,
});

const bedrockDataSource = backend.resources.data.addHttpDataSource(
  'bedrockDS',
  'https://bedrock-runtime.us-east-1.amazonaws.com',
  {
    authorizationConfig: {
      signingRegion: 'us-east-1',
      signingServiceName: 'bedrock',
    },
  }
);

bedrockDataSource.grantPrincipal.addToPrincipalPolicy(
  new PolicyStatement({
    resources: ['*'],
    actions: ['bedrock:InvokeModel'],
  })
);

backend.resources.data.addResolver('bedrockResolver', {
  dataSource: bedrockDataSource,
  typeName: 'Query',
  fieldName: 'askBedrock',
  code: Code.fromAsset('amplify/askBedrock.js'),
  runtime: FunctionRuntime.JS_1_0_0,
});
