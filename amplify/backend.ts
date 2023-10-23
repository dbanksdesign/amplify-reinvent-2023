import { PolicyStatement } from 'aws-cdk-lib/aws-iam'
import * as path from 'path'
import { Code, FunctionRuntime } from 'aws-cdk-lib/aws-appsync'
import { Backend } from '@aws-amplify/backend';
import { auth } from './auth/resource.js';
import { data } from './data/resource.js';

const backend = new Backend({
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
)

bedrockDataSource.grantPrincipal.addToPrincipalPolicy(
  new PolicyStatement({
    resources: [
      'arn:aws:bedrock:us-east-1::foundation-model/anthropic.claude-v2',
    ],
    actions: ['bedrock:InvokeModel'],
  })
)

backend.resources.data.addResolver('bedrockResolver', {
  dataSource: bedrockDataSource,
  typeName: 'Query',
  fieldName: 'generateTacoRecipe',
  code: Code.fromAsset(path.join(__dirname, 'generateTacoRecipe.js')),
  runtime: FunctionRuntime.JS_1_0_0,
})
