/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateQuestion = /* GraphQL */ `subscription OnCreateQuestion(
  $filter: ModelSubscriptionQuestionFilterInput
  $owner: String
) {
  onCreateQuestion(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateQuestionSubscriptionVariables,
  APITypes.OnCreateQuestionSubscription
>;
export const onCreateTest = /* GraphQL */ `subscription OnCreateTest(
  $filter: ModelSubscriptionTestFilterInput
  $owner: String
) {
  onCreateTest(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateTestSubscriptionVariables,
  APITypes.OnCreateTestSubscription
>;
export const onDeleteQuestion = /* GraphQL */ `subscription OnDeleteQuestion(
  $filter: ModelSubscriptionQuestionFilterInput
  $owner: String
) {
  onDeleteQuestion(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteQuestionSubscriptionVariables,
  APITypes.OnDeleteQuestionSubscription
>;
export const onDeleteTest = /* GraphQL */ `subscription OnDeleteTest(
  $filter: ModelSubscriptionTestFilterInput
  $owner: String
) {
  onDeleteTest(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteTestSubscriptionVariables,
  APITypes.OnDeleteTestSubscription
>;
export const onUpdateQuestion = /* GraphQL */ `subscription OnUpdateQuestion(
  $filter: ModelSubscriptionQuestionFilterInput
  $owner: String
) {
  onUpdateQuestion(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateQuestionSubscriptionVariables,
  APITypes.OnUpdateQuestionSubscription
>;
export const onUpdateTest = /* GraphQL */ `subscription OnUpdateTest(
  $filter: ModelSubscriptionTestFilterInput
  $owner: String
) {
  onUpdateTest(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateTestSubscriptionVariables,
  APITypes.OnUpdateTestSubscription
>;
