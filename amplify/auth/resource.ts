import { defineAuth } from '@aws-amplify/backend';

// auth with email
export const auth = defineAuth({
  loginWith: {
    email: true,
  },
});
