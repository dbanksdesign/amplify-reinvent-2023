/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAuthor = /* GraphQL */ `
  mutation CreateAuthor(
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
`;
export const createComment = /* GraphQL */ `
  mutation CreateComment(
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
`;
export const createPost = /* GraphQL */ `
  mutation CreatePost(
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
`;
export const deleteAuthor = /* GraphQL */ `
  mutation DeleteAuthor(
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
`;
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
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
`;
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
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
`;
export const updateAuthor = /* GraphQL */ `
  mutation UpdateAuthor(
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
`;
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
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
`;
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
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
`;
