/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const askBedrock = /* GraphQL */ `query AskBedrock(
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
` as GeneratedQuery<
  APITypes.AskBedrockQueryVariables,
  APITypes.AskBedrockQuery
>;
export const getQuestion = /* GraphQL */ `query GetQuestion($id: ID!) {
  getQuestion(id: $id) {
    answers
    correctAnswer
    createdAt
    id
    owner
    testQuestionsId
    text
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetQuestionQueryVariables,
  APITypes.GetQuestionQuery
>;
export const getTest = /* GraphQL */ `query GetTest($id: ID!) {
  getTest(id: $id) {
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
` as GeneratedQuery<APITypes.GetTestQueryVariables, APITypes.GetTestQuery>;
export const listQuestions = /* GraphQL */ `query ListQuestions(
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
      id
      owner
      testQuestionsId
      text
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListQuestionsQueryVariables,
  APITypes.ListQuestionsQuery
>;
export const listTests = /* GraphQL */ `query ListTests(
  $filter: ModelTestFilterInput
  $id: ID
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listTests(
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
` as GeneratedQuery<APITypes.ListTestsQueryVariables, APITypes.ListTestsQuery>;
