/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTacoRecipe = /* GraphQL */ `
  mutation CreateTacoRecipe(
    $condition: ModelTacoRecipeConditionInput
    $input: CreateTacoRecipeInput!
  ) {
    createTacoRecipe(condition: $condition, input: $input) {
      createdAt
      description
      id
      owner
      title
      updatedAt
      __typename
    }
  }
`;
export const deleteTacoRecipe = /* GraphQL */ `
  mutation DeleteTacoRecipe(
    $condition: ModelTacoRecipeConditionInput
    $input: DeleteTacoRecipeInput!
  ) {
    deleteTacoRecipe(condition: $condition, input: $input) {
      createdAt
      description
      id
      owner
      title
      updatedAt
      __typename
    }
  }
`;
export const updateTacoRecipe = /* GraphQL */ `
  mutation UpdateTacoRecipe(
    $condition: ModelTacoRecipeConditionInput
    $input: UpdateTacoRecipeInput!
  ) {
    updateTacoRecipe(condition: $condition, input: $input) {
      createdAt
      description
      id
      owner
      title
      updatedAt
      __typename
    }
  }
`;
