/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type BedrockResponse = {
  __typename: "BedrockResponse",
  body?: string | null,
};

export type Question = {
  __typename: "Question",
  answers: Array< string | null >,
  correctAnswer: string,
  createdAt: string,
  id: string,
  owner?: string | null,
  testQuestionsId?: string | null,
  text: string,
  updatedAt: string,
};

export type Test = {
  __typename: "Test",
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

export type ModelQuestionFilterInput = {
  and?: Array< ModelQuestionFilterInput | null > | null,
  answers?: ModelStringInput | null,
  correctAnswer?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelQuestionFilterInput | null,
  or?: Array< ModelQuestionFilterInput | null > | null,
  owner?: ModelStringInput | null,
  testQuestionsId?: ModelIDInput | null,
  text?: ModelStringInput | null,
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


export type ModelTestFilterInput = {
  and?: Array< ModelTestFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelTestFilterInput | null,
  or?: Array< ModelTestFilterInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelTestConnection = {
  __typename: "ModelTestConnection",
  items:  Array<Test | null >,
  nextToken?: string | null,
};

export type ModelQuestionConditionInput = {
  and?: Array< ModelQuestionConditionInput | null > | null,
  answers?: ModelStringInput | null,
  correctAnswer?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  not?: ModelQuestionConditionInput | null,
  or?: Array< ModelQuestionConditionInput | null > | null,
  owner?: ModelStringInput | null,
  testQuestionsId?: ModelIDInput | null,
  text?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateQuestionInput = {
  answers: Array< string | null >,
  correctAnswer: string,
  createdAt?: string | null,
  id?: string | null,
  owner?: string | null,
  testQuestionsId?: string | null,
  text: string,
  updatedAt?: string | null,
};

export type ModelTestConditionInput = {
  and?: Array< ModelTestConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  not?: ModelTestConditionInput | null,
  or?: Array< ModelTestConditionInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateTestInput = {
  createdAt?: string | null,
  id?: string | null,
  owner?: string | null,
  updatedAt?: string | null,
};

export type DeleteQuestionInput = {
  id: string,
};

export type DeleteTestInput = {
  id: string,
};

export type UpdateQuestionInput = {
  answers?: Array< string | null > | null,
  correctAnswer?: string | null,
  createdAt?: string | null,
  id: string,
  owner?: string | null,
  testQuestionsId?: string | null,
  text?: string | null,
  updatedAt?: string | null,
};

export type UpdateTestInput = {
  createdAt?: string | null,
  id: string,
  owner?: string | null,
  updatedAt?: string | null,
};

export type ModelSubscriptionQuestionFilterInput = {
  and?: Array< ModelSubscriptionQuestionFilterInput | null > | null,
  answers?: ModelSubscriptionStringInput | null,
  correctAnswer?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionQuestionFilterInput | null > | null,
  testQuestionsId?: ModelSubscriptionIDInput | null,
  text?: ModelSubscriptionStringInput | null,
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

export type ModelSubscriptionTestFilterInput = {
  and?: Array< ModelSubscriptionTestFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionTestFilterInput | null > | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type AskBedrockQueryVariables = {
  answers: Array< string | null >,
  model: string,
  question: string,
  temperature: number,
};

export type AskBedrockQuery = {
  askBedrock?:  {
    __typename: "BedrockResponse",
    body?: string | null,
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
    id: string,
    owner?: string | null,
    testQuestionsId?: string | null,
    text: string,
    updatedAt: string,
  } | null,
};

export type GetTestQueryVariables = {
  id: string,
};

export type GetTestQuery = {
  getTest?:  {
    __typename: "Test",
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
      id: string,
      owner?: string | null,
      testQuestionsId?: string | null,
      text: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListTestsQueryVariables = {
  filter?: ModelTestFilterInput | null,
  id?: string | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListTestsQuery = {
  listTests?:  {
    __typename: "ModelTestConnection",
    items:  Array< {
      __typename: "Test",
      createdAt: string,
      id: string,
      owner?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
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
    id: string,
    owner?: string | null,
    testQuestionsId?: string | null,
    text: string,
    updatedAt: string,
  } | null,
};

export type CreateTestMutationVariables = {
  condition?: ModelTestConditionInput | null,
  input: CreateTestInput,
};

export type CreateTestMutation = {
  createTest?:  {
    __typename: "Test",
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
    id: string,
    owner?: string | null,
    testQuestionsId?: string | null,
    text: string,
    updatedAt: string,
  } | null,
};

export type DeleteTestMutationVariables = {
  condition?: ModelTestConditionInput | null,
  input: DeleteTestInput,
};

export type DeleteTestMutation = {
  deleteTest?:  {
    __typename: "Test",
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
    id: string,
    owner?: string | null,
    testQuestionsId?: string | null,
    text: string,
    updatedAt: string,
  } | null,
};

export type UpdateTestMutationVariables = {
  condition?: ModelTestConditionInput | null,
  input: UpdateTestInput,
};

export type UpdateTestMutation = {
  updateTest?:  {
    __typename: "Test",
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
    id: string,
    owner?: string | null,
    testQuestionsId?: string | null,
    text: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTestSubscriptionVariables = {
  filter?: ModelSubscriptionTestFilterInput | null,
  owner?: string | null,
};

export type OnCreateTestSubscription = {
  onCreateTest?:  {
    __typename: "Test",
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
    id: string,
    owner?: string | null,
    testQuestionsId?: string | null,
    text: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTestSubscriptionVariables = {
  filter?: ModelSubscriptionTestFilterInput | null,
  owner?: string | null,
};

export type OnDeleteTestSubscription = {
  onDeleteTest?:  {
    __typename: "Test",
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
    id: string,
    owner?: string | null,
    testQuestionsId?: string | null,
    text: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTestSubscriptionVariables = {
  filter?: ModelSubscriptionTestFilterInput | null,
  owner?: string | null,
};

export type OnUpdateTestSubscription = {
  onUpdateTest?:  {
    __typename: "Test",
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
