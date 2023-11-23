import { defineAuth } from '@aws-amplify/backend';

// auth with email link verification
export const auth = defineAuth({
  loginWith: {
    email: true,
  },
});
