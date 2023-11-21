import { generateClient } from 'aws-amplify/api';
import { Amplify } from 'aws-amplify';
import awsExports from '../../amplifyconfiguration.json';
import { Schema } from '../../amplify/data/resource';

Amplify.configure({
  ...awsExports,
});

const client = generateClient<Schema>({
  authMode: 'userPool',
});

export default function useClient() {
  return {
    client,
  };
}
