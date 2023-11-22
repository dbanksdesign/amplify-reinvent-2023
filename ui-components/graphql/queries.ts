/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const askBedrock = /* GraphQL */ `
  query AskBedrock(
    $answers: [String]!
    $model: String!
    $question: String!
    $temperature: Float!
  ) {
    askBedrock(
      answers: $answers
      model: $model
      question: $question
      temperature: $temperature
    ) {
      body
      __typename
    }
  }
`;
export const getGame = /* GraphQL */ `
  query GetGame($id: ID!) {
    getGame(id: $id) {
      createdAt
      id
      owner
      questions {
        nextToken
        __typename
      }
      updatedAt
      __typename
    }
  }
`;
export const getQuestion = /* GraphQL */ `
  query GetQuestion($id: ID!) {
    getQuestion(id: $id) {
      answers
      correctAnswer
      createdAt
      gameQuestionsId
      id
      owner
      text
      updatedAt
      __typename
    }
  }
`;
export const listGames = /* GraphQL */ `
  query ListGames(
    $filter: ModelGameFilterInput
    $id: ID
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listGames(
      filter: $filter
      id: $id
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        createdAt
        id
        owner
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listQuestions = /* GraphQL */ `
  query ListQuestions(
    $filter: ModelQuestionFilterInput
    $id: ID
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listQuestions(
      filter: $filter
      id: $id
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        answers
        correctAnswer
        createdAt
        gameQuestionsId
        id
        owner
        text
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
