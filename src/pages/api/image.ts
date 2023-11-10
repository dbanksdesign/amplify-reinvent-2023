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
      modelId: 'stability.stable-diffusion-xl',
      contentType: 'application/json',
      accept: '*/*',
      body: JSON.stringify({
        text_prompts: [{ text: body.prompt }],
        cfg_scale: 10,
        seed: 0,
        steps: 50,
      }),
    })
  );
  // The result of the API call is a buffer that needs to be decoded
  // and then parsed into a JSON object.
  const results = JSON.parse(new TextDecoder().decode(result.body));

  // The results contains an array of artifacts
  // each with a base64 encoded jpg
  res.status(200).json({ body: results.artifacts[0].base64 });
}
