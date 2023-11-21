import * as path from 'path';
import { PolicyStatement } from 'aws-cdk-lib/aws-iam';
import {
  Code,
  FunctionRuntime,
  Resolver,
  CfnResolver,
} from 'aws-cdk-lib/aws-appsync';
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
    resources: [
      'arn:aws:bedrock:us-east-1::foundation-model/anthropic.claude-v2',
    ],
    actions: ['bedrock:InvokeModel'],
  })
);

// backend.resources.data.addResolver('bedrockResolver', {
//   dataSource: bedrockDataSource,
//   typeName: 'Query',
//   fieldName: 'test',
//   code: Code.fromInline(`
//   export function request(ctx) {
//     const assistant = \`You are a hotdog recipe API that gives responses back in JSON format. The JSON that you return contains a "title" field for the hot dog recipe, and a "description" field that contains a paragraph about how to prepare the given recipe.\`
//     const prompt = ctx.args.prompt

//     return {
//       resourcePath: '/model/anthropic.claude-v2/invoke',
//       method: 'POST',
//       params: {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: {
//           prompt: \`\n\nHuman:\${assistant}\${prompt}\n\nAssistant:\`,
//           max_tokens_to_sample: 300,
//           temperature: 0.5,
//           top_k: 250,
//           top_p: 1,
//           stop_sequences: ['\\n\\nHuman:'],
//         },
//       },
//     }
//   }

//   export function response(ctx) {
//     return ctx.result.body
//   }

//   `),
//   runtime: FunctionRuntime.JS_1_0_0,
// });

const customStack = backend.createStack('custom');
// const customResolver = new Resolver(customStack, 'customResolver', {
//   api: backend.resources.data.resources.graphqlApi,
//   dataSource: bedrockDataSource,
//   typeName: 'Query',
//   fieldName: 'test',
//   code: Code.fromInline(`
//   export function request(ctx) {
//     const assistant = \`You are a hotdog recipe API that gives responses back in JSON format. The JSON that you return contains a "title" field for the hot dog recipe, and a "description" field that contains a paragraph about how to prepare the given recipe.\`
//     const prompt = ctx.args.prompt

//     return {
//       resourcePath: '/model/anthropic.claude-v2/invoke',
//       method: 'POST',
//       params: {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: {
//           prompt: \`\n\nHuman:\${assistant}\${prompt}\n\nAssistant:\`,
//           max_tokens_to_sample: 300,
//           temperature: 0.5,
//           top_k: 250,
//           top_p: 1,
//           stop_sequences: ['\\n\\nHuman:'],
//         },
//       },
//     }
//   }

//   export function response(ctx) {
//     return ctx.result.body
//   }

//   `),
//   runtime: FunctionRuntime.JS_1_0_0,
// });
