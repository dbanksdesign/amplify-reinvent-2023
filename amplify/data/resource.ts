import { defineData, a, ClientSchema, Func } from '@aws-amplify/backend';

// We need: game, players, questions, answers
// answers need to come in realtime, once all answers have returned show the right answer and move on to next question
// have a leaderboard
// Bedrock player: can set the model, temp
// if we do auth, then you can play in multiple games and have history
// Game has

const schema = a.schema({
  // 1. Define your return type as a custom type
  // 1. Define your return type as a custom type
  EchoResponse: a.customType({
    content: a.string(),
    executionDuration: a.float(),
  }),

  Post: a
    .model({
      title: a.string(),
      body: a.string(),
      author: a.hasOne('Author'),
      comments: a.hasMany('Comment'),
    })
    .authorization([a.allow.public().to(['read']), a.allow.owner()]),

  Comment: a
    .model({
      body: a.string(),
      post: a.hasOne('Post'),
    })
    .authorization([a.allow.public().to(['read']), a.allow.owner()]),

  Author: a
    .model({
      name: a.string(),
    })
    .authorization([a.allow.public().to(['read']), a.allow.owner()]),

  // test: a.query().returns(a.ref('EchoResponse')),

  // 2. Define your query with the return type and, optionally, arguments
  echo: a
    .query()
    .arguments({ content: a.string() })
    .returns(a.ref('EchoResponse'))
    .authorization([a.allow.private()])
    // Step 2 - Define a function key ("echoHandler") that will be used
    // to map this query to the corresponding functions provided to
    // defineData(...)
    .function('echoHandler'),

  test: a.query().returns(a.ref('EchoResponse')),

  generateTacoRecipe: a
    .query()
    .arguments({
      prompt: a.string(),
    })
    .function('generateTacoRecipe')
    .returns(a.ref('TacoRecipe'))
    .authorization([a.allow.private()]),
  TacoRecipe: a
    .model({
      id: a.id(),
      title: a.string(),
      description: a.string(),
    })
    .authorization([a.allow.public()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  functions: {
    echoHandler: Func.fromDir({
      codePath: './echo',
      name: 'echoHandlerFunc',
    }),
  },
  authorizationModes: {
    defaultAuthorizationMode: 'userPool',
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});
