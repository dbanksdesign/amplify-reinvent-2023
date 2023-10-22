import { defineData } from "@aws-amplify/backend-graphql";
import { type ClientSchema, a } from "@aws-amplify/amplify-api-next-alpha";
import { Duration } from "aws-cdk-lib";
import { AuthorizationModes } from "@aws-amplify/graphql-api-construct";

const schema = a.schema({
  Post: a
    .model({
      title: a.string().required(),
      body: a.string().required(),
      link: a.url().required(),
      comments: a.hasMany("Comment").valueRequired().arrayRequired(),
    })
    .authorization([
      a.allow.public(),
      // a.allow.owner(),
      // a.allow.specificGroup("Admins").to(["read", "update", "delete"]),
      // a.allow.private("userPools").to(["read"]),
    ]),

  Comment: a
    .model({
      content: a.string().required(),
      post: a.belongsTo("Post"),
    })
    .authorization([
      a.allow.public(),
      // a.allow.owner(),
      // a.allow.specificGroup("Admins").to(["read", "update", "delete"]),
      // a.allow.private("userPools").to(["read"]),
    ]),

  Note: a.model({
    content: a.string(),
    author: a.string(),
  }),
});

export type Schema = ClientSchema<typeof schema>;

const authorizationModes: AuthorizationModes = {
  defaultAuthorizationMode: "API_KEY",
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
	generateTacoRecipe(prompt: String): String!
}`,
  authorizationModes,
});
