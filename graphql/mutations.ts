/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createAuthor = /* GraphQL */ `mutation CreateAuthor(
  $condition: ModelAuthorConditionInput
  $input: CreateAuthorInput!
) {
  createAuthor(condition: $condition, input: $input) {
    createdAt
    id
    name
    owner
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateAuthorMutationVariables,
  APITypes.CreateAuthorMutation
>;
export const createComment = /* GraphQL */ `mutation CreateComment(
  $condition: ModelCommentConditionInput
  $input: CreateCommentInput!
) {
  createComment(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateCommentMutationVariables,
  APITypes.CreateCommentMutation
>;
export const createPost = /* GraphQL */ `mutation CreatePost(
  $condition: ModelPostConditionInput
  $input: CreatePostInput!
) {
  createPost(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreatePostMutationVariables,
  APITypes.CreatePostMutation
>;
export const createTacoRecipe = /* GraphQL */ `mutation CreateTacoRecipe(
  $condition: ModelTacoRecipeConditionInput
  $input: CreateTacoRecipeInput!
) {
  createTacoRecipe(condition: $condition, input: $input) {
    createdAt
    description
    id
    title
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateTacoRecipeMutationVariables,
  APITypes.CreateTacoRecipeMutation
>;
export const deleteAuthor = /* GraphQL */ `mutation DeleteAuthor(
  $condition: ModelAuthorConditionInput
  $input: DeleteAuthorInput!
) {
  deleteAuthor(condition: $condition, input: $input) {
    createdAt
    id
    name
    owner
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteAuthorMutationVariables,
  APITypes.DeleteAuthorMutation
>;
export const deleteComment = /* GraphQL */ `mutation DeleteComment(
  $condition: ModelCommentConditionInput
  $input: DeleteCommentInput!
) {
  deleteComment(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteCommentMutationVariables,
  APITypes.DeleteCommentMutation
>;
export const deletePost = /* GraphQL */ `mutation DeletePost(
  $condition: ModelPostConditionInput
  $input: DeletePostInput!
) {
  deletePost(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeletePostMutationVariables,
  APITypes.DeletePostMutation
>;
export const deleteTacoRecipe = /* GraphQL */ `mutation DeleteTacoRecipe(
  $condition: ModelTacoRecipeConditionInput
  $input: DeleteTacoRecipeInput!
) {
  deleteTacoRecipe(condition: $condition, input: $input) {
    createdAt
    description
    id
    title
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteTacoRecipeMutationVariables,
  APITypes.DeleteTacoRecipeMutation
>;
export const updateAuthor = /* GraphQL */ `mutation UpdateAuthor(
  $condition: ModelAuthorConditionInput
  $input: UpdateAuthorInput!
) {
  updateAuthor(condition: $condition, input: $input) {
    createdAt
    id
    name
    owner
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateAuthorMutationVariables,
  APITypes.UpdateAuthorMutation
>;
export const updateComment = /* GraphQL */ `mutation UpdateComment(
  $condition: ModelCommentConditionInput
  $input: UpdateCommentInput!
) {
  updateComment(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateCommentMutationVariables,
  APITypes.UpdateCommentMutation
>;
export const updatePost = /* GraphQL */ `mutation UpdatePost(
  $condition: ModelPostConditionInput
  $input: UpdatePostInput!
) {
  updatePost(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdatePostMutationVariables,
  APITypes.UpdatePostMutation
>;
export const updateTacoRecipe = /* GraphQL */ `mutation UpdateTacoRecipe(
  $condition: ModelTacoRecipeConditionInput
  $input: UpdateTacoRecipeInput!
) {
  updateTacoRecipe(condition: $condition, input: $input) {
    createdAt
    description
    id
    title
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateTacoRecipeMutationVariables,
  APITypes.UpdateTacoRecipeMutation
>;
