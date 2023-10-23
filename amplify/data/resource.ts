import { defineData } from "@aws-amplify/backend-graphql";
import { Duration } from "aws-cdk-lib";
import { AuthorizationModes } from "@aws-amplify/graphql-api-construct";

const authorizationModes: AuthorizationModes = {
  defaultAuthorizationMode: "AMAZON_COGNITO_USER_POOLS",
  apiKeyConfig: {
    expires: Duration.days(365),
  },
};

export const data = defineData({
  schema: /* GraphQL */ `
  type TacoRecipe
	@model
	@auth(
		rules: [
			{ allow: owner }
			{ allow: public, operations: [read] }
		]
	) {
	id: ID!
	title: String!
	description: String
}

type Query {
	generateTacoRecipe(prompt: String): String! @aws_cognito_user_pools
}`,
  authorizationModes,
});
