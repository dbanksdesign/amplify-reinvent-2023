import {
  BedrockRuntimeClient,
  InvokeModelCommand,
} from '@aws-sdk/client-bedrock-runtime';
import { Amplify, withSSRContext } from 'aws-amplify';
import type { NextApiRequest, NextApiResponse } from 'next';
import awsExports from '@/aws-exports';

Amplify.configure({
  ...awsExports,
  ssr: true,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const body = JSON.parse(req.body);
  const SSR = withSSRContext({ req });
  const credentials = await SSR.Auth.currentCredentials();
  const bedrock = new BedrockRuntimeClient({
    serviceId: 'bedrock',
    region: 'us-east-1',
    credentials,
  });

  const result = await bedrock.send(
    new InvokeModelCommand({
      modelId: 'anthropic.claude-v2',
      contentType: 'application/json',
      accept: '*/*',
      body: JSON.stringify({
        prompt: body.prompt,
        max_tokens_to_sample: 2000,
        temperature: 1,
        top_k: 250,
        top_p: 0.99,
        stop_sequences: ['\n\nHuman:'],
        anthropic_version: 'bedrock-2023-05-31',
      }),
    })
  );
  res.status(200).json(JSON.parse(new TextDecoder().decode(result.body)));
}
