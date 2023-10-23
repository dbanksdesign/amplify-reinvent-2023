/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const generateTacoRecipe = /* GraphQL */ `
  query GenerateTacoRecipe($prompt: String) {
    generateTacoRecipe(prompt: $prompt)
  }
`;
export const getTacoRecipe = /* GraphQL */ `
  query GetTacoRecipe($id: ID!) {
    getTacoRecipe(id: $id) {
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
export const listTacoRecipes = /* GraphQL */ `
  query ListTacoRecipes(
    $filter: ModelTacoRecipeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTacoRecipes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        createdAt
        description
        id
        owner
        title
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
