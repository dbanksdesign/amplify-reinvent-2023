import { defineData, a, ClientSchema } from '@aws-amplify/backend';

const schema = a.schema({
  BedrockResponse: a.customType({
    body: a.string(),
    error: a.string(),
  }),

  Todo: a
    .model({
      content: a.string(),
      isDone: a.boolean(),
    })
    .authorization([a.allow.public().to(['read']), a.allow.owner()]),

  askBedrock: a
    .query()
    .arguments({
      todos: a.string().array(),
    })
    .returns(a.ref('BedrockResponse')),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'userPool',
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});
