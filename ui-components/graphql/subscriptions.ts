/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAuthor = /* GraphQL */ `
  subscription OnCreateAuthor(
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
`;
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment(
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
`;
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost(
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
`;
export const onDeleteAuthor = /* GraphQL */ `
  subscription OnDeleteAuthor(
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
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment(
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
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost(
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
`;
export const onUpdateAuthor = /* GraphQL */ `
  subscription OnUpdateAuthor(
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
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment(
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
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost(
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
`;
