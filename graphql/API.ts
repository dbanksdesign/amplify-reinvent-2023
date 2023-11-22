/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type BedrockResponse = {
  __typename: "BedrockResponse",
  body?: string | null,
  error?: string | null,
};

export type Game = {
  __typename: "Game",
  createdAt: string,
  id: string,
  owner?: string | null,
  questions?: ModelQuestionConnection | null,
  updatedAt: string,
};

export type ModelQuestionConnection = {
  __typename: "ModelQuestionConnection",
  items:  Array<Question | null >,
  nextToken?: string | null,
};

export type Question = {
  __typename: "Question",
  answers: Array< string | null >,
  correctAnswer: string,
  createdAt: string,
  game?: Game | null,
  gameQuestionsId?: string | null,
  id: string,
  owner?: string | null,
  text: string,
  updatedAt: string,
};

export type Todo = {
  __typename: "Todo",
  content?: string | null,
  createdAt: string,
  id: string,
  isDone?: boolean | null,
  owner?: string | null,
  updatedAt: string,
};

export type ModelGameFilterInput = {
  and?: Array< ModelGameFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelGameFilterInput | null,
  or?: Array< ModelGameFilterInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  _null = "_null",
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
}


export type ModelSizeInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export type ModelIDInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelGameConnection = {
  __typename: "ModelGameConnection",
  items:  Array<Game | null >,
  nextToken?: string | null,
};

export type ModelQuestionFilterInput = {
  and?: Array< ModelQuestionFilterInput | null > | null,
  answers?: ModelStringInput | null,
  correctAnswer?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  gameQuestionsId?: ModelIDInput | null,
  id?: ModelIDInput | null,
  not?: ModelQuestionFilterInput | null,
  or?: Array< ModelQuestionFilterInput | null > | null,
  owner?: ModelStringInput | null,
  text?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelTodoFilterInput = {
  and?: Array< ModelTodoFilterInput | null > | null,
  content?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  isDone?: ModelBooleanInput | null,
  not?: ModelTodoFilterInput | null,
  or?: Array< ModelTodoFilterInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelBooleanInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  eq?: boolean | null,
  ne?: boolean | null,
};

export type ModelTodoConnection = {
  __typename: "ModelTodoConnection",
  items:  Array<Todo | null >,
  nextToken?: string | null,
};

export type ModelGameConditionInput = {
  and?: Array< ModelGameConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  not?: ModelGameConditionInput | null,
  or?: Array< ModelGameConditionInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateGameInput = {
  createdAt?: string | null,
  id?: string | null,
  owner?: string | null,
  updatedAt?: string | null,
};

export type ModelQuestionConditionInput = {
  and?: Array< ModelQuestionConditionInput | null > | null,
  answers?: ModelStringInput | null,
  correctAnswer?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  gameQuestionsId?: ModelIDInput | null,
  not?: ModelQuestionConditionInput | null,
  or?: Array< ModelQuestionConditionInput | null > | null,
  owner?: ModelStringInput | null,
  text?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateQuestionInput = {
  answers: Array< string | null >,
  correctAnswer: string,
  createdAt?: string | null,
  gameQuestionsId?: string | null,
  id?: string | null,
  owner?: string | null,
  text: string,
  updatedAt?: string | null,
};

export type ModelTodoConditionInput = {
  and?: Array< ModelTodoConditionInput | null > | null,
  content?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  isDone?: ModelBooleanInput | null,
  not?: ModelTodoConditionInput | null,
  or?: Array< ModelTodoConditionInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateTodoInput = {
  content?: string | null,
  createdAt?: string | null,
  id?: string | null,
  isDone?: boolean | null,
  owner?: string | null,
  updatedAt?: string | null,
};

export type DeleteGameInput = {
  id: string,
};

export type DeleteQuestionInput = {
  id: string,
};

export type DeleteTodoInput = {
  id: string,
};

export type UpdateGameInput = {
  createdAt?: string | null,
  id: string,
  owner?: string | null,
  updatedAt?: string | null,
};

export type UpdateQuestionInput = {
  answers?: Array< string | null > | null,
  correctAnswer?: string | null,
  createdAt?: string | null,
  gameQuestionsId?: string | null,
  id: string,
  owner?: string | null,
  text?: string | null,
  updatedAt?: string | null,
};

export type UpdateTodoInput = {
  content?: string | null,
  createdAt?: string | null,
  id: string,
  isDone?: boolean | null,
  owner?: string | null,
  updatedAt?: string | null,
};

export type ModelSubscriptionGameFilterInput = {
  and?: Array< ModelSubscriptionGameFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionGameFilterInput | null > | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionStringInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIDInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionQuestionFilterInput = {
  and?: Array< ModelSubscriptionQuestionFilterInput | null > | null,
  answers?: ModelSubscriptionStringInput | null,
  correctAnswer?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  gameQuestionsId?: ModelSubscriptionIDInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionQuestionFilterInput | null > | null,
  text?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionTodoFilterInput = {
  and?: Array< ModelSubscriptionTodoFilterInput | null > | null,
  content?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  isDone?: ModelSubscriptionBooleanInput | null,
  or?: Array< ModelSubscriptionTodoFilterInput | null > | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionBooleanInput = {
  eq?: boolean | null,
  ne?: boolean | null,
};

export type AskBedrockQueryVariables = {
  todos?: Array< string | null > | null,
};

export type AskBedrockQuery = {
  askBedrock?:  {
    __typename: "BedrockResponse",
    body?: string | null,
    error?: string | null,
  } | null,
};

export type GetGameQueryVariables = {
  id: string,
};

export type GetGameQuery = {
  getGame?:  {
    __typename: "Game",
    createdAt: string,
    id: string,
    owner?: string | null,
    questions?:  {
      __typename: "ModelQuestionConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type GetQuestionQueryVariables = {
  id: string,
};

export type GetQuestionQuery = {
  getQuestion?:  {
    __typename: "Question",
    answers: Array< string | null >,
    correctAnswer: string,
    createdAt: string,
    game?:  {
      __typename: "Game",
      createdAt: string,
      id: string,
      owner?: string | null,
      updatedAt: string,
    } | null,
    gameQuestionsId?: string | null,
    id: string,
    owner?: string | null,
    text: string,
    updatedAt: string,
  } | null,
};

export type GetTodoQueryVariables = {
  id: string,
};

export type GetTodoQuery = {
  getTodo?:  {
    __typename: "Todo",
    content?: string | null,
    createdAt: string,
    id: string,
    isDone?: boolean | null,
    owner?: string | null,
    updatedAt: string,
  } | null,
};

export type ListGamesQueryVariables = {
  filter?: ModelGameFilterInput | null,
  id?: string | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListGamesQuery = {
  listGames?:  {
    __typename: "ModelGameConnection",
    items:  Array< {
      __typename: "Game",
      createdAt: string,
      id: string,
      owner?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListQuestionsQueryVariables = {
  filter?: ModelQuestionFilterInput | null,
  id?: string | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListQuestionsQuery = {
  listQuestions?:  {
    __typename: "ModelQuestionConnection",
    items:  Array< {
      __typename: "Question",
      answers: Array< string | null >,
      correctAnswer: string,
      createdAt: string,
      gameQuestionsId?: string | null,
      id: string,
      owner?: string | null,
      text: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListTodosQueryVariables = {
  filter?: ModelTodoFilterInput | null,
  id?: string | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListTodosQuery = {
  listTodos?:  {
    __typename: "ModelTodoConnection",
    items:  Array< {
      __typename: "Todo",
      content?: string | null,
      createdAt: string,
      id: string,
      isDone?: boolean | null,
      owner?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CreateGameMutationVariables = {
  condition?: ModelGameConditionInput | null,
  input: CreateGameInput,
};

export type CreateGameMutation = {
  createGame?:  {
    __typename: "Game",
    createdAt: string,
    id: string,
    owner?: string | null,
    questions?:  {
      __typename: "ModelQuestionConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type CreateQuestionMutationVariables = {
  condition?: ModelQuestionConditionInput | null,
  input: CreateQuestionInput,
};

export type CreateQuestionMutation = {
  createQuestion?:  {
    __typename: "Question",
    answers: Array< string | null >,
    correctAnswer: string,
    createdAt: string,
    game?:  {
      __typename: "Game",
      createdAt: string,
      id: string,
      owner?: string | null,
      updatedAt: string,
    } | null,
    gameQuestionsId?: string | null,
    id: string,
    owner?: string | null,
    text: string,
    updatedAt: string,
  } | null,
};

export type CreateTodoMutationVariables = {
  condition?: ModelTodoConditionInput | null,
  input: CreateTodoInput,
};

export type CreateTodoMutation = {
  createTodo?:  {
    __typename: "Todo",
    content?: string | null,
    createdAt: string,
    id: string,
    isDone?: boolean | null,
    owner?: string | null,
    updatedAt: string,
  } | null,
};

export type DeleteGameMutationVariables = {
  condition?: ModelGameConditionInput | null,
  input: DeleteGameInput,
};

export type DeleteGameMutation = {
  deleteGame?:  {
    __typename: "Game",
    createdAt: string,
    id: string,
    owner?: string | null,
    questions?:  {
      __typename: "ModelQuestionConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type DeleteQuestionMutationVariables = {
  condition?: ModelQuestionConditionInput | null,
  input: DeleteQuestionInput,
};

export type DeleteQuestionMutation = {
  deleteQuestion?:  {
    __typename: "Question",
    answers: Array< string | null >,
    correctAnswer: string,
    createdAt: string,
    game?:  {
      __typename: "Game",
      createdAt: string,
      id: string,
      owner?: string | null,
      updatedAt: string,
    } | null,
    gameQuestionsId?: string | null,
    id: string,
    owner?: string | null,
    text: string,
    updatedAt: string,
  } | null,
};

export type DeleteTodoMutationVariables = {
  condition?: ModelTodoConditionInput | null,
  input: DeleteTodoInput,
};

export type DeleteTodoMutation = {
  deleteTodo?:  {
    __typename: "Todo",
    content?: string | null,
    createdAt: string,
    id: string,
    isDone?: boolean | null,
    owner?: string | null,
    updatedAt: string,
  } | null,
};

export type UpdateGameMutationVariables = {
  condition?: ModelGameConditionInput | null,
  input: UpdateGameInput,
};

export type UpdateGameMutation = {
  updateGame?:  {
    __typename: "Game",
    createdAt: string,
    id: string,
    owner?: string | null,
    questions?:  {
      __typename: "ModelQuestionConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type UpdateQuestionMutationVariables = {
  condition?: ModelQuestionConditionInput | null,
  input: UpdateQuestionInput,
};

export type UpdateQuestionMutation = {
  updateQuestion?:  {
    __typename: "Question",
    answers: Array< string | null >,
    correctAnswer: string,
    createdAt: string,
    game?:  {
      __typename: "Game",
      createdAt: string,
      id: string,
      owner?: string | null,
      updatedAt: string,
    } | null,
    gameQuestionsId?: string | null,
    id: string,
    owner?: string | null,
    text: string,
    updatedAt: string,
  } | null,
};

export type UpdateTodoMutationVariables = {
  condition?: ModelTodoConditionInput | null,
  input: UpdateTodoInput,
};

export type UpdateTodoMutation = {
  updateTodo?:  {
    __typename: "Todo",
    content?: string | null,
    createdAt: string,
    id: string,
    isDone?: boolean | null,
    owner?: string | null,
    updatedAt: string,
  } | null,
};

export type OnCreateGameSubscriptionVariables = {
  filter?: ModelSubscriptionGameFilterInput | null,
  owner?: string | null,
};

export type OnCreateGameSubscription = {
  onCreateGame?:  {
    __typename: "Game",
    createdAt: string,
    id: string,
    owner?: string | null,
    questions?:  {
      __typename: "ModelQuestionConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnCreateQuestionSubscriptionVariables = {
  filter?: ModelSubscriptionQuestionFilterInput | null,
  owner?: string | null,
};

export type OnCreateQuestionSubscription = {
  onCreateQuestion?:  {
    __typename: "Question",
    answers: Array< string | null >,
    correctAnswer: string,
    createdAt: string,
    game?:  {
      __typename: "Game",
      createdAt: string,
      id: string,
      owner?: string | null,
      updatedAt: string,
    } | null,
    gameQuestionsId?: string | null,
    id: string,
    owner?: string | null,
    text: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
  owner?: string | null,
};

export type OnCreateTodoSubscription = {
  onCreateTodo?:  {
    __typename: "Todo",
    content?: string | null,
    createdAt: string,
    id: string,
    isDone?: boolean | null,
    owner?: string | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteGameSubscriptionVariables = {
  filter?: ModelSubscriptionGameFilterInput | null,
  owner?: string | null,
};

export type OnDeleteGameSubscription = {
  onDeleteGame?:  {
    __typename: "Game",
    createdAt: string,
    id: string,
    owner?: string | null,
    questions?:  {
      __typename: "ModelQuestionConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteQuestionSubscriptionVariables = {
  filter?: ModelSubscriptionQuestionFilterInput | null,
  owner?: string | null,
};

export type OnDeleteQuestionSubscription = {
  onDeleteQuestion?:  {
    __typename: "Question",
    answers: Array< string | null >,
    correctAnswer: string,
    createdAt: string,
    game?:  {
      __typename: "Game",
      createdAt: string,
      id: string,
      owner?: string | null,
      updatedAt: string,
    } | null,
    gameQuestionsId?: string | null,
    id: string,
    owner?: string | null,
    text: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
  owner?: string | null,
};

export type OnDeleteTodoSubscription = {
  onDeleteTodo?:  {
    __typename: "Todo",
    content?: string | null,
    createdAt: string,
    id: string,
    isDone?: boolean | null,
    owner?: string | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateGameSubscriptionVariables = {
  filter?: ModelSubscriptionGameFilterInput | null,
  owner?: string | null,
};

export type OnUpdateGameSubscription = {
  onUpdateGame?:  {
    __typename: "Game",
    createdAt: string,
    id: string,
    owner?: string | null,
    questions?:  {
      __typename: "ModelQuestionConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateQuestionSubscriptionVariables = {
  filter?: ModelSubscriptionQuestionFilterInput | null,
  owner?: string | null,
};

export type OnUpdateQuestionSubscription = {
  onUpdateQuestion?:  {
    __typename: "Question",
    answers: Array< string | null >,
    correctAnswer: string,
    createdAt: string,
    game?:  {
      __typename: "Game",
      createdAt: string,
      id: string,
      owner?: string | null,
      updatedAt: string,
    } | null,
    gameQuestionsId?: string | null,
    id: string,
    owner?: string | null,
    text: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
  owner?: string | null,
};

export type OnUpdateTodoSubscription = {
  onUpdateTodo?:  {
    __typename: "Todo",
    content?: string | null,
    createdAt: string,
    id: string,
    isDone?: boolean | null,
    owner?: string | null,
    updatedAt: string,
  } | null,
};
