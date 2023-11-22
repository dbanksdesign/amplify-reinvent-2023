/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createQuestion = /* GraphQL */ `mutation CreateQuestion(
  $condition: ModelQuestionConditionInput
  $input: CreateQuestionInput!
) {
  createQuestion(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateQuestionMutationVariables,
  APITypes.CreateQuestionMutation
>;
export const createTest = /* GraphQL */ `mutation CreateTest(
  $condition: ModelTestConditionInput
  $input: CreateTestInput!
) {
  createTest(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateTestMutationVariables,
  APITypes.CreateTestMutation
>;
export const deleteQuestion = /* GraphQL */ `mutation DeleteQuestion(
  $condition: ModelQuestionConditionInput
  $input: DeleteQuestionInput!
) {
  deleteQuestion(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteQuestionMutationVariables,
  APITypes.DeleteQuestionMutation
>;
export const deleteTest = /* GraphQL */ `mutation DeleteTest(
  $condition: ModelTestConditionInput
  $input: DeleteTestInput!
) {
  deleteTest(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteTestMutationVariables,
  APITypes.DeleteTestMutation
>;
export const updateQuestion = /* GraphQL */ `mutation UpdateQuestion(
  $condition: ModelQuestionConditionInput
  $input: UpdateQuestionInput!
) {
  updateQuestion(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateQuestionMutationVariables,
  APITypes.UpdateQuestionMutation
>;
export const updateTest = /* GraphQL */ `mutation UpdateTest(
  $condition: ModelTestConditionInput
  $input: UpdateTestInput!
) {
  updateTest(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateTestMutationVariables,
  APITypes.UpdateTestMutation
>;
