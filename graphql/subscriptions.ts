/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateGame = /* GraphQL */ `subscription OnCreateGame(
  $filter: ModelSubscriptionGameFilterInput
  $owner: String
) {
  onCreateGame(filter: $filter, owner: $owner) {
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
  APITypes.OnCreateGameSubscriptionVariables,
  APITypes.OnCreateGameSubscription
>;
export const onCreateQuestion = /* GraphQL */ `subscription OnCreateQuestion(
  $filter: ModelSubscriptionQuestionFilterInput
  $owner: String
) {
  onCreateQuestion(filter: $filter, owner: $owner) {
    answers
    correctAnswer
    createdAt
    game {
      createdAt
      id
      owner
      updatedAt
      __typename
    }
    gameQuestionsId
    id
    owner
    text
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateQuestionSubscriptionVariables,
  APITypes.OnCreateQuestionSubscription
>;
export const onCreateTodo = /* GraphQL */ `subscription OnCreateTodo(
  $filter: ModelSubscriptionTodoFilterInput
  $owner: String
) {
  onCreateTodo(filter: $filter, owner: $owner) {
    content
    createdAt
    id
    isDone
    owner
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateTodoSubscriptionVariables,
  APITypes.OnCreateTodoSubscription
>;
export const onDeleteGame = /* GraphQL */ `subscription OnDeleteGame(
  $filter: ModelSubscriptionGameFilterInput
  $owner: String
) {
  onDeleteGame(filter: $filter, owner: $owner) {
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
  APITypes.OnDeleteGameSubscriptionVariables,
  APITypes.OnDeleteGameSubscription
>;
export const onDeleteQuestion = /* GraphQL */ `subscription OnDeleteQuestion(
  $filter: ModelSubscriptionQuestionFilterInput
  $owner: String
) {
  onDeleteQuestion(filter: $filter, owner: $owner) {
    answers
    correctAnswer
    createdAt
    game {
      createdAt
      id
      owner
      updatedAt
      __typename
    }
    gameQuestionsId
    id
    owner
    text
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteQuestionSubscriptionVariables,
  APITypes.OnDeleteQuestionSubscription
>;
export const onDeleteTodo = /* GraphQL */ `subscription OnDeleteTodo(
  $filter: ModelSubscriptionTodoFilterInput
  $owner: String
) {
  onDeleteTodo(filter: $filter, owner: $owner) {
    content
    createdAt
    id
    isDone
    owner
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteTodoSubscriptionVariables,
  APITypes.OnDeleteTodoSubscription
>;
export const onUpdateGame = /* GraphQL */ `subscription OnUpdateGame(
  $filter: ModelSubscriptionGameFilterInput
  $owner: String
) {
  onUpdateGame(filter: $filter, owner: $owner) {
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
  APITypes.OnUpdateGameSubscriptionVariables,
  APITypes.OnUpdateGameSubscription
>;
export const onUpdateQuestion = /* GraphQL */ `subscription OnUpdateQuestion(
  $filter: ModelSubscriptionQuestionFilterInput
  $owner: String
) {
  onUpdateQuestion(filter: $filter, owner: $owner) {
    answers
    correctAnswer
    createdAt
    game {
      createdAt
      id
      owner
      updatedAt
      __typename
    }
    gameQuestionsId
    id
    owner
    text
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateQuestionSubscriptionVariables,
  APITypes.OnUpdateQuestionSubscription
>;
export const onUpdateTodo = /* GraphQL */ `subscription OnUpdateTodo(
  $filter: ModelSubscriptionTodoFilterInput
  $owner: String
) {
  onUpdateTodo(filter: $filter, owner: $owner) {
    content
    createdAt
    id
    isDone
    owner
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateTodoSubscriptionVariables,
  APITypes.OnUpdateTodoSubscription
>;
