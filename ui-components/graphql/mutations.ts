/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createGame = /* GraphQL */ `
  mutation CreateGame(
    $condition: ModelGameConditionInput
    $input: CreateGameInput!
  ) {
    createGame(condition: $condition, input: $input) {
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
export const createQuestion = /* GraphQL */ `
  mutation CreateQuestion(
    $condition: ModelQuestionConditionInput
    $input: CreateQuestionInput!
  ) {
    createQuestion(condition: $condition, input: $input) {
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
`;
export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $condition: ModelTodoConditionInput
    $input: CreateTodoInput!
  ) {
    createTodo(condition: $condition, input: $input) {
      content
      createdAt
      id
      isDone
      owner
      updatedAt
      __typename
    }
  }
`;
export const deleteGame = /* GraphQL */ `
  mutation DeleteGame(
    $condition: ModelGameConditionInput
    $input: DeleteGameInput!
  ) {
    deleteGame(condition: $condition, input: $input) {
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
export const deleteQuestion = /* GraphQL */ `
  mutation DeleteQuestion(
    $condition: ModelQuestionConditionInput
    $input: DeleteQuestionInput!
  ) {
    deleteQuestion(condition: $condition, input: $input) {
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
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $condition: ModelTodoConditionInput
    $input: DeleteTodoInput!
  ) {
    deleteTodo(condition: $condition, input: $input) {
      content
      createdAt
      id
      isDone
      owner
      updatedAt
      __typename
    }
  }
`;
export const updateGame = /* GraphQL */ `
  mutation UpdateGame(
    $condition: ModelGameConditionInput
    $input: UpdateGameInput!
  ) {
    updateGame(condition: $condition, input: $input) {
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
export const updateQuestion = /* GraphQL */ `
  mutation UpdateQuestion(
    $condition: ModelQuestionConditionInput
    $input: UpdateQuestionInput!
  ) {
    updateQuestion(condition: $condition, input: $input) {
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
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $condition: ModelTodoConditionInput
    $input: UpdateTodoInput!
  ) {
    updateTodo(condition: $condition, input: $input) {
      content
      createdAt
      id
      isDone
      owner
      updatedAt
      __typename
    }
  }
`;
