/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const echo = /* GraphQL */ `query Echo($content: String) {
  echo(content: $content) {
    content
    executionDuration
    __typename
  }
}
` as GeneratedQuery<APITypes.EchoQueryVariables, APITypes.EchoQuery>;
export const generateTacoRecipe = /* GraphQL */ `query GenerateTacoRecipe($prompt: String) {
  generateTacoRecipe(prompt: $prompt) {
    createdAt
    description
    id
    title
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GenerateTacoRecipeQueryVariables,
  APITypes.GenerateTacoRecipeQuery
>;
export const getAuthor = /* GraphQL */ `query GetAuthor($id: ID!) {
  getAuthor(id: $id) {
    createdAt
    id
    name
    owner
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetAuthorQueryVariables, APITypes.GetAuthorQuery>;
export const getComment = /* GraphQL */ `query GetComment($id: ID!) {
  getComment(id: $id) {
    body
    commentPostId
    createdAt
    id
    owner
    post {
      body
      createdAt
      id
      owner
      postAuthorId
      title
      updatedAt
      __typename
    }
    postCommentsId
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCommentQueryVariables,
  APITypes.GetCommentQuery
>;
export const getPost = /* GraphQL */ `query GetPost($id: ID!) {
  getPost(id: $id) {
    author {
      createdAt
      id
      name
      owner
      updatedAt
      __typename
    }
    body
    comments {
      nextToken
      __typename
    }
    createdAt
    id
    owner
    postAuthorId
    title
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetPostQueryVariables, APITypes.GetPostQuery>;
export const getTacoRecipe = /* GraphQL */ `query GetTacoRecipe($id: ID!) {
  getTacoRecipe(id: $id) {
    createdAt
    description
    id
    title
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetTacoRecipeQueryVariables,
  APITypes.GetTacoRecipeQuery
>;
export const listAuthors = /* GraphQL */ `query ListAuthors(
  $filter: ModelAuthorFilterInput
  $id: ID
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listAuthors(
    filter: $filter
    id: $id
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      createdAt
      id
      name
      owner
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAuthorsQueryVariables,
  APITypes.ListAuthorsQuery
>;
export const listComments = /* GraphQL */ `query ListComments(
  $filter: ModelCommentFilterInput
  $id: ID
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listComments(
    filter: $filter
    id: $id
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      body
      commentPostId
      createdAt
      id
      owner
      postCommentsId
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCommentsQueryVariables,
  APITypes.ListCommentsQuery
>;
export const listPosts = /* GraphQL */ `query ListPosts(
  $filter: ModelPostFilterInput
  $id: ID
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listPosts(
    filter: $filter
    id: $id
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      body
      createdAt
      id
      owner
      postAuthorId
      title
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListPostsQueryVariables, APITypes.ListPostsQuery>;
export const listTacoRecipes = /* GraphQL */ `query ListTacoRecipes(
  $filter: ModelTacoRecipeFilterInput
  $id: ID
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listTacoRecipes(
    filter: $filter
    id: $id
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      createdAt
      description
      id
      title
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListTacoRecipesQueryVariables,
  APITypes.ListTacoRecipesQuery
>;
export const test = /* GraphQL */ `query Test {
  test {
    content
    executionDuration
    __typename
  }
}
` as GeneratedQuery<APITypes.TestQueryVariables, APITypes.TestQuery>;
