import { defineData, a, ClientSchema, Func } from '@aws-amplify/backend';

// We need: game, players, questions, answers
// answers need to come in realtime, once all answers have returned show the right answer and move on to next question
// have a leaderboard
// Bedrock player: can set the model, temp
// if we do auth, then you can play in multiple games and have history
// Game has

const schema = a.schema({
  BedrockResponse: a.customType({
    body: a.string(),
  }),

  Question: a
    .model({
      text: a.string().required(),
      answers: a.string().array().required(),
      correctAnswer: a.string().required(),
      game: a.belongsTo('Game'),
    })
    .authorization([
      a.allow.public().to(['read']),
      a.allow.private().to(['create']),
      a.allow.owner().to(['create', 'update', 'delete', 'read']),
    ]),

  Game: a
    .model({
      questions: a.hasMany('Question'),
    })
    .authorization([
      a.allow.public().to(['read']),
      a.allow.owner().to(['create', 'update', 'delete', 'read']),
    ]),

  askBedrock: a
    .query()
    .arguments({
      model: a.string().required(),
      temperature: a.float().required(),
      question: a.string().required(),
      answers: a.string().array().required(),
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
