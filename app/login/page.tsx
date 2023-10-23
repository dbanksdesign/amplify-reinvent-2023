'use client'
import * as Auth from 'aws-amplify/auth';
import { Authenticator } from "@aws-amplify/ui-react";

export default function LoginPage() {
  // Auth.getCurrentUser().then(user => {
  //   console.log(user);
  // })
  return (
    <Authenticator />
  )
}
