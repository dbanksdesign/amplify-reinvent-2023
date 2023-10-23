/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTacoRecipe = /* GraphQL */ `
  subscription OnCreateTacoRecipe(
    $filter: ModelSubscriptionTacoRecipeFilterInput
    $owner: String
  ) {
    onCreateTacoRecipe(filter: $filter, owner: $owner) {
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
export const onDeleteTacoRecipe = /* GraphQL */ `
  subscription OnDeleteTacoRecipe(
    $filter: ModelSubscriptionTacoRecipeFilterInput
    $owner: String
  ) {
    onDeleteTacoRecipe(filter: $filter, owner: $owner) {
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
export const onUpdateTacoRecipe = /* GraphQL */ `
  subscription OnUpdateTacoRecipe(
    $filter: ModelSubscriptionTacoRecipeFilterInput
    $owner: String
  ) {
    onUpdateTacoRecipe(filter: $filter, owner: $owner) {
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
