/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateAuthor = /* GraphQL */ `subscription OnCreateAuthor(
  $filter: ModelSubscriptionAuthorFilterInput
  $owner: String
) {
  onCreateAuthor(filter: $filter, owner: $owner) {
    createdAt
    id
    name
    owner
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateAuthorSubscriptionVariables,
  APITypes.OnCreateAuthorSubscription
>;
export const onCreateComment = /* GraphQL */ `subscription OnCreateComment(
  $filter: ModelSubscriptionCommentFilterInput
  $owner: String
) {
  onCreateComment(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCommentSubscriptionVariables,
  APITypes.OnCreateCommentSubscription
>;
export const onCreatePost = /* GraphQL */ `subscription OnCreatePost(
  $filter: ModelSubscriptionPostFilterInput
  $owner: String
) {
  onCreatePost(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreatePostSubscriptionVariables,
  APITypes.OnCreatePostSubscription
>;
export const onCreateTacoRecipe = /* GraphQL */ `subscription OnCreateTacoRecipe(
  $filter: ModelSubscriptionTacoRecipeFilterInput
) {
  onCreateTacoRecipe(filter: $filter) {
    createdAt
    description
    id
    title
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateTacoRecipeSubscriptionVariables,
  APITypes.OnCreateTacoRecipeSubscription
>;
export const onDeleteAuthor = /* GraphQL */ `subscription OnDeleteAuthor(
  $filter: ModelSubscriptionAuthorFilterInput
  $owner: String
) {
  onDeleteAuthor(filter: $filter, owner: $owner) {
    createdAt
    id
    name
    owner
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteAuthorSubscriptionVariables,
  APITypes.OnDeleteAuthorSubscription
>;
export const onDeleteComment = /* GraphQL */ `subscription OnDeleteComment(
  $filter: ModelSubscriptionCommentFilterInput
  $owner: String
) {
  onDeleteComment(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCommentSubscriptionVariables,
  APITypes.OnDeleteCommentSubscription
>;
export const onDeletePost = /* GraphQL */ `subscription OnDeletePost(
  $filter: ModelSubscriptionPostFilterInput
  $owner: String
) {
  onDeletePost(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeletePostSubscriptionVariables,
  APITypes.OnDeletePostSubscription
>;
export const onDeleteTacoRecipe = /* GraphQL */ `subscription OnDeleteTacoRecipe(
  $filter: ModelSubscriptionTacoRecipeFilterInput
) {
  onDeleteTacoRecipe(filter: $filter) {
    createdAt
    description
    id
    title
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteTacoRecipeSubscriptionVariables,
  APITypes.OnDeleteTacoRecipeSubscription
>;
export const onUpdateAuthor = /* GraphQL */ `subscription OnUpdateAuthor(
  $filter: ModelSubscriptionAuthorFilterInput
  $owner: String
) {
  onUpdateAuthor(filter: $filter, owner: $owner) {
    createdAt
    id
    name
    owner
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateAuthorSubscriptionVariables,
  APITypes.OnUpdateAuthorSubscription
>;
export const onUpdateComment = /* GraphQL */ `subscription OnUpdateComment(
  $filter: ModelSubscriptionCommentFilterInput
  $owner: String
) {
  onUpdateComment(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCommentSubscriptionVariables,
  APITypes.OnUpdateCommentSubscription
>;
export const onUpdatePost = /* GraphQL */ `subscription OnUpdatePost(
  $filter: ModelSubscriptionPostFilterInput
  $owner: String
) {
  onUpdatePost(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdatePostSubscriptionVariables,
  APITypes.OnUpdatePostSubscription
>;
export const onUpdateTacoRecipe = /* GraphQL */ `subscription OnUpdateTacoRecipe(
  $filter: ModelSubscriptionTacoRecipeFilterInput
) {
  onUpdateTacoRecipe(filter: $filter) {
    createdAt
    description
    id
    title
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateTacoRecipeSubscriptionVariables,
  APITypes.OnUpdateTacoRecipeSubscription
>;
