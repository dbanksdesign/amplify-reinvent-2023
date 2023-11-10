import { generateClient } from 'aws-amplify/api';
import { Amplify } from 'aws-amplify';
import awsExports from '../../amplifyconfiguration.json';

Amplify.configure({
  ...awsExports,
});

const client = generateClient<{}>({
  authMode: 'userPool'
});

export default function useClient() {
  return {
    client
  }
}
