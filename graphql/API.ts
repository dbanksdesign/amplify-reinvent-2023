/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type EchoResponse = {
  __typename: "EchoResponse",
  content?: string | null,
  executionDuration?: number | null,
};

export type TacoRecipe = {
  __typename: "TacoRecipe",
  createdAt: string,
  description?: string | null,
  id: string,
  title?: string | null,
  updatedAt: string,
};

export type Author = {
  __typename: "Author",
  createdAt: string,
  id: string,
  name?: string | null,
  owner?: string | null,
  updatedAt: string,
};

export type Comment = {
  __typename: "Comment",
  body?: string | null,
  commentPostId?: string | null,
  createdAt: string,
  id: string,
  owner?: string | null,
  post?: Post | null,
  postCommentsId?: string | null,
  updatedAt: string,
};

export type Post = {
  __typename: "Post",
  author?: Author | null,
  body?: string | null,
  comments?: ModelCommentConnection | null,
  createdAt: string,
  id: string,
  owner?: string | null,
  postAuthorId?: string | null,
  title?: string | null,
  updatedAt: string,
};

export type ModelCommentConnection = {
  __typename: "ModelCommentConnection",
  items:  Array<Comment | null >,
  nextToken?: string | null,
};

export type ModelAuthorFilterInput = {
  and?: Array< ModelAuthorFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  not?: ModelAuthorFilterInput | null,
  or?: Array< ModelAuthorFilterInput | null > | null,
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


export type ModelAuthorConnection = {
  __typename: "ModelAuthorConnection",
  items:  Array<Author | null >,
  nextToken?: string | null,
};

export type ModelCommentFilterInput = {
  and?: Array< ModelCommentFilterInput | null > | null,
  body?: ModelStringInput | null,
  commentPostId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelCommentFilterInput | null,
  or?: Array< ModelCommentFilterInput | null > | null,
  owner?: ModelStringInput | null,
  postCommentsId?: ModelIDInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelPostFilterInput = {
  and?: Array< ModelPostFilterInput | null > | null,
  body?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelPostFilterInput | null,
  or?: Array< ModelPostFilterInput | null > | null,
  owner?: ModelStringInput | null,
  postAuthorId?: ModelIDInput | null,
  title?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelPostConnection = {
  __typename: "ModelPostConnection",
  items:  Array<Post | null >,
  nextToken?: string | null,
};

export type ModelTacoRecipeFilterInput = {
  and?: Array< ModelTacoRecipeFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  description?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelTacoRecipeFilterInput | null,
  or?: Array< ModelTacoRecipeFilterInput | null > | null,
  title?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelTacoRecipeConnection = {
  __typename: "ModelTacoRecipeConnection",
  items:  Array<TacoRecipe | null >,
  nextToken?: string | null,
};

export type ModelAuthorConditionInput = {
  and?: Array< ModelAuthorConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  name?: ModelStringInput | null,
  not?: ModelAuthorConditionInput | null,
  or?: Array< ModelAuthorConditionInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateAuthorInput = {
  createdAt?: string | null,
  id?: string | null,
  name?: string | null,
  owner?: string | null,
  updatedAt?: string | null,
};

export type ModelCommentConditionInput = {
  and?: Array< ModelCommentConditionInput | null > | null,
  body?: ModelStringInput | null,
  commentPostId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  not?: ModelCommentConditionInput | null,
  or?: Array< ModelCommentConditionInput | null > | null,
  owner?: ModelStringInput | null,
  postCommentsId?: ModelIDInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateCommentInput = {
  body?: string | null,
  commentPostId?: string | null,
  createdAt?: string | null,
  id?: string | null,
  owner?: string | null,
  postCommentsId?: string | null,
  updatedAt?: string | null,
};

export type ModelPostConditionInput = {
  and?: Array< ModelPostConditionInput | null > | null,
  body?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  not?: ModelPostConditionInput | null,
  or?: Array< ModelPostConditionInput | null > | null,
  owner?: ModelStringInput | null,
  postAuthorId?: ModelIDInput | null,
  title?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreatePostInput = {
  body?: string | null,
  createdAt?: string | null,
  id?: string | null,
  owner?: string | null,
  postAuthorId?: string | null,
  title?: string | null,
  updatedAt?: string | null,
};

export type ModelTacoRecipeConditionInput = {
  and?: Array< ModelTacoRecipeConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  description?: ModelStringInput | null,
  not?: ModelTacoRecipeConditionInput | null,
  or?: Array< ModelTacoRecipeConditionInput | null > | null,
  title?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateTacoRecipeInput = {
  createdAt?: string | null,
  description?: string | null,
  id?: string | null,
  title?: string | null,
  updatedAt?: string | null,
};

export type DeleteAuthorInput = {
  id: string,
};

export type DeleteCommentInput = {
  id: string,
};

export type DeletePostInput = {
  id: string,
};

export type DeleteTacoRecipeInput = {
  id: string,
};

export type UpdateAuthorInput = {
  createdAt?: string | null,
  id: string,
  name?: string | null,
  owner?: string | null,
  updatedAt?: string | null,
};

export type UpdateCommentInput = {
  body?: string | null,
  commentPostId?: string | null,
  createdAt?: string | null,
  id: string,
  owner?: string | null,
  postCommentsId?: string | null,
  updatedAt?: string | null,
};

export type UpdatePostInput = {
  body?: string | null,
  createdAt?: string | null,
  id: string,
  owner?: string | null,
  postAuthorId?: string | null,
  title?: string | null,
  updatedAt?: string | null,
};

export type UpdateTacoRecipeInput = {
  createdAt?: string | null,
  description?: string | null,
  id: string,
  title?: string | null,
  updatedAt?: string | null,
};

export type ModelSubscriptionAuthorFilterInput = {
  and?: Array< ModelSubscriptionAuthorFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionAuthorFilterInput | null > | null,
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

export type ModelSubscriptionCommentFilterInput = {
  and?: Array< ModelSubscriptionCommentFilterInput | null > | null,
  body?: ModelSubscriptionStringInput | null,
  commentPostId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionCommentFilterInput | null > | null,
  postCommentsId?: ModelSubscriptionIDInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionPostFilterInput = {
  and?: Array< ModelSubscriptionPostFilterInput | null > | null,
  body?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionPostFilterInput | null > | null,
  postAuthorId?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionTacoRecipeFilterInput = {
  and?: Array< ModelSubscriptionTacoRecipeFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionTacoRecipeFilterInput | null > | null,
  title?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type EchoQueryVariables = {
  content?: string | null,
};

export type EchoQuery = {
  echo?:  {
    __typename: "EchoResponse",
    content?: string | null,
    executionDuration?: number | null,
  } | null,
};

export type GenerateTacoRecipeQueryVariables = {
  prompt?: string | null,
};

export type GenerateTacoRecipeQuery = {
  generateTacoRecipe?:  {
    __typename: "TacoRecipe",
    createdAt: string,
    description?: string | null,
    id: string,
    title?: string | null,
    updatedAt: string,
  } | null,
};

export type GetAuthorQueryVariables = {
  id: string,
};

export type GetAuthorQuery = {
  getAuthor?:  {
    __typename: "Author",
    createdAt: string,
    id: string,
    name?: string | null,
    owner?: string | null,
    updatedAt: string,
  } | null,
};

export type GetCommentQueryVariables = {
  id: string,
};

export type GetCommentQuery = {
  getComment?:  {
    __typename: "Comment",
    body?: string | null,
    commentPostId?: string | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    post?:  {
      __typename: "Post",
      body?: string | null,
      createdAt: string,
      id: string,
      owner?: string | null,
      postAuthorId?: string | null,
      title?: string | null,
      updatedAt: string,
    } | null,
    postCommentsId?: string | null,
    updatedAt: string,
  } | null,
};

export type GetPostQueryVariables = {
  id: string,
};

export type GetPostQuery = {
  getPost?:  {
    __typename: "Post",
    author?:  {
      __typename: "Author",
      createdAt: string,
      id: string,
      name?: string | null,
      owner?: string | null,
      updatedAt: string,
    } | null,
    body?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    postAuthorId?: string | null,
    title?: string | null,
    updatedAt: string,
  } | null,
};

export type GetTacoRecipeQueryVariables = {
  id: string,
};

export type GetTacoRecipeQuery = {
  getTacoRecipe?:  {
    __typename: "TacoRecipe",
    createdAt: string,
    description?: string | null,
    id: string,
    title?: string | null,
    updatedAt: string,
  } | null,
};

export type ListAuthorsQueryVariables = {
  filter?: ModelAuthorFilterInput | null,
  id?: string | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListAuthorsQuery = {
  listAuthors?:  {
    __typename: "ModelAuthorConnection",
    items:  Array< {
      __typename: "Author",
      createdAt: string,
      id: string,
      name?: string | null,
      owner?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListCommentsQueryVariables = {
  filter?: ModelCommentFilterInput | null,
  id?: string | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListCommentsQuery = {
  listComments?:  {
    __typename: "ModelCommentConnection",
    items:  Array< {
      __typename: "Comment",
      body?: string | null,
      commentPostId?: string | null,
      createdAt: string,
      id: string,
      owner?: string | null,
      postCommentsId?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListPostsQueryVariables = {
  filter?: ModelPostFilterInput | null,
  id?: string | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListPostsQuery = {
  listPosts?:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      body?: string | null,
      createdAt: string,
      id: string,
      owner?: string | null,
      postAuthorId?: string | null,
      title?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListTacoRecipesQueryVariables = {
  filter?: ModelTacoRecipeFilterInput | null,
  id?: string | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListTacoRecipesQuery = {
  listTacoRecipes?:  {
    __typename: "ModelTacoRecipeConnection",
    items:  Array< {
      __typename: "TacoRecipe",
      createdAt: string,
      description?: string | null,
      id: string,
      title?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type TestQuery = {
  test?:  {
    __typename: "EchoResponse",
    content?: string | null,
    executionDuration?: number | null,
  } | null,
};

export type CreateAuthorMutationVariables = {
  condition?: ModelAuthorConditionInput | null,
  input: CreateAuthorInput,
};

export type CreateAuthorMutation = {
  createAuthor?:  {
    __typename: "Author",
    createdAt: string,
    id: string,
    name?: string | null,
    owner?: string | null,
    updatedAt: string,
  } | null,
};

export type CreateCommentMutationVariables = {
  condition?: ModelCommentConditionInput | null,
  input: CreateCommentInput,
};

export type CreateCommentMutation = {
  createComment?:  {
    __typename: "Comment",
    body?: string | null,
    commentPostId?: string | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    post?:  {
      __typename: "Post",
      body?: string | null,
      createdAt: string,
      id: string,
      owner?: string | null,
      postAuthorId?: string | null,
      title?: string | null,
      updatedAt: string,
    } | null,
    postCommentsId?: string | null,
    updatedAt: string,
  } | null,
};

export type CreatePostMutationVariables = {
  condition?: ModelPostConditionInput | null,
  input: CreatePostInput,
};

export type CreatePostMutation = {
  createPost?:  {
    __typename: "Post",
    author?:  {
      __typename: "Author",
      createdAt: string,
      id: string,
      name?: string | null,
      owner?: string | null,
      updatedAt: string,
    } | null,
    body?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    postAuthorId?: string | null,
    title?: string | null,
    updatedAt: string,
  } | null,
};

export type CreateTacoRecipeMutationVariables = {
  condition?: ModelTacoRecipeConditionInput | null,
  input: CreateTacoRecipeInput,
};

export type CreateTacoRecipeMutation = {
  createTacoRecipe?:  {
    __typename: "TacoRecipe",
    createdAt: string,
    description?: string | null,
    id: string,
    title?: string | null,
    updatedAt: string,
  } | null,
};

export type DeleteAuthorMutationVariables = {
  condition?: ModelAuthorConditionInput | null,
  input: DeleteAuthorInput,
};

export type DeleteAuthorMutation = {
  deleteAuthor?:  {
    __typename: "Author",
    createdAt: string,
    id: string,
    name?: string | null,
    owner?: string | null,
    updatedAt: string,
  } | null,
};

export type DeleteCommentMutationVariables = {
  condition?: ModelCommentConditionInput | null,
  input: DeleteCommentInput,
};

export type DeleteCommentMutation = {
  deleteComment?:  {
    __typename: "Comment",
    body?: string | null,
    commentPostId?: string | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    post?:  {
      __typename: "Post",
      body?: string | null,
      createdAt: string,
      id: string,
      owner?: string | null,
      postAuthorId?: string | null,
      title?: string | null,
      updatedAt: string,
    } | null,
    postCommentsId?: string | null,
    updatedAt: string,
  } | null,
};

export type DeletePostMutationVariables = {
  condition?: ModelPostConditionInput | null,
  input: DeletePostInput,
};

export type DeletePostMutation = {
  deletePost?:  {
    __typename: "Post",
    author?:  {
      __typename: "Author",
      createdAt: string,
      id: string,
      name?: string | null,
      owner?: string | null,
      updatedAt: string,
    } | null,
    body?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    postAuthorId?: string | null,
    title?: string | null,
    updatedAt: string,
  } | null,
};

export type DeleteTacoRecipeMutationVariables = {
  condition?: ModelTacoRecipeConditionInput | null,
  input: DeleteTacoRecipeInput,
};

export type DeleteTacoRecipeMutation = {
  deleteTacoRecipe?:  {
    __typename: "TacoRecipe",
    createdAt: string,
    description?: string | null,
    id: string,
    title?: string | null,
    updatedAt: string,
  } | null,
};

export type UpdateAuthorMutationVariables = {
  condition?: ModelAuthorConditionInput | null,
  input: UpdateAuthorInput,
};

export type UpdateAuthorMutation = {
  updateAuthor?:  {
    __typename: "Author",
    createdAt: string,
    id: string,
    name?: string | null,
    owner?: string | null,
    updatedAt: string,
  } | null,
};

export type UpdateCommentMutationVariables = {
  condition?: ModelCommentConditionInput | null,
  input: UpdateCommentInput,
};

export type UpdateCommentMutation = {
  updateComment?:  {
    __typename: "Comment",
    body?: string | null,
    commentPostId?: string | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    post?:  {
      __typename: "Post",
      body?: string | null,
      createdAt: string,
      id: string,
      owner?: string | null,
      postAuthorId?: string | null,
      title?: string | null,
      updatedAt: string,
    } | null,
    postCommentsId?: string | null,
    updatedAt: string,
  } | null,
};

export type UpdatePostMutationVariables = {
  condition?: ModelPostConditionInput | null,
  input: UpdatePostInput,
};

export type UpdatePostMutation = {
  updatePost?:  {
    __typename: "Post",
    author?:  {
      __typename: "Author",
      createdAt: string,
      id: string,
      name?: string | null,
      owner?: string | null,
      updatedAt: string,
    } | null,
    body?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    postAuthorId?: string | null,
    title?: string | null,
    updatedAt: string,
  } | null,
};

export type UpdateTacoRecipeMutationVariables = {
  condition?: ModelTacoRecipeConditionInput | null,
  input: UpdateTacoRecipeInput,
};

export type UpdateTacoRecipeMutation = {
  updateTacoRecipe?:  {
    __typename: "TacoRecipe",
    createdAt: string,
    description?: string | null,
    id: string,
    title?: string | null,
    updatedAt: string,
  } | null,
};

export type OnCreateAuthorSubscriptionVariables = {
  filter?: ModelSubscriptionAuthorFilterInput | null,
  owner?: string | null,
};

export type OnCreateAuthorSubscription = {
  onCreateAuthor?:  {
    __typename: "Author",
    createdAt: string,
    id: string,
    name?: string | null,
    owner?: string | null,
    updatedAt: string,
  } | null,
};

export type OnCreateCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null,
  owner?: string | null,
};

export type OnCreateCommentSubscription = {
  onCreateComment?:  {
    __typename: "Comment",
    body?: string | null,
    commentPostId?: string | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    post?:  {
      __typename: "Post",
      body?: string | null,
      createdAt: string,
      id: string,
      owner?: string | null,
      postAuthorId?: string | null,
      title?: string | null,
      updatedAt: string,
    } | null,
    postCommentsId?: string | null,
    updatedAt: string,
  } | null,
};

export type OnCreatePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
  owner?: string | null,
};

export type OnCreatePostSubscription = {
  onCreatePost?:  {
    __typename: "Post",
    author?:  {
      __typename: "Author",
      createdAt: string,
      id: string,
      name?: string | null,
      owner?: string | null,
      updatedAt: string,
    } | null,
    body?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    postAuthorId?: string | null,
    title?: string | null,
    updatedAt: string,
  } | null,
};

export type OnCreateTacoRecipeSubscriptionVariables = {
  filter?: ModelSubscriptionTacoRecipeFilterInput | null,
};

export type OnCreateTacoRecipeSubscription = {
  onCreateTacoRecipe?:  {
    __typename: "TacoRecipe",
    createdAt: string,
    description?: string | null,
    id: string,
    title?: string | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteAuthorSubscriptionVariables = {
  filter?: ModelSubscriptionAuthorFilterInput | null,
  owner?: string | null,
};

export type OnDeleteAuthorSubscription = {
  onDeleteAuthor?:  {
    __typename: "Author",
    createdAt: string,
    id: string,
    name?: string | null,
    owner?: string | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null,
  owner?: string | null,
};

export type OnDeleteCommentSubscription = {
  onDeleteComment?:  {
    __typename: "Comment",
    body?: string | null,
    commentPostId?: string | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    post?:  {
      __typename: "Post",
      body?: string | null,
      createdAt: string,
      id: string,
      owner?: string | null,
      postAuthorId?: string | null,
      title?: string | null,
      updatedAt: string,
    } | null,
    postCommentsId?: string | null,
    updatedAt: string,
  } | null,
};

export type OnDeletePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
  owner?: string | null,
};

export type OnDeletePostSubscription = {
  onDeletePost?:  {
    __typename: "Post",
    author?:  {
      __typename: "Author",
      createdAt: string,
      id: string,
      name?: string | null,
      owner?: string | null,
      updatedAt: string,
    } | null,
    body?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    postAuthorId?: string | null,
    title?: string | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteTacoRecipeSubscriptionVariables = {
  filter?: ModelSubscriptionTacoRecipeFilterInput | null,
};

export type OnDeleteTacoRecipeSubscription = {
  onDeleteTacoRecipe?:  {
    __typename: "TacoRecipe",
    createdAt: string,
    description?: string | null,
    id: string,
    title?: string | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateAuthorSubscriptionVariables = {
  filter?: ModelSubscriptionAuthorFilterInput | null,
  owner?: string | null,
};

export type OnUpdateAuthorSubscription = {
  onUpdateAuthor?:  {
    __typename: "Author",
    createdAt: string,
    id: string,
    name?: string | null,
    owner?: string | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null,
  owner?: string | null,
};

export type OnUpdateCommentSubscription = {
  onUpdateComment?:  {
    __typename: "Comment",
    body?: string | null,
    commentPostId?: string | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    post?:  {
      __typename: "Post",
      body?: string | null,
      createdAt: string,
      id: string,
      owner?: string | null,
      postAuthorId?: string | null,
      title?: string | null,
      updatedAt: string,
    } | null,
    postCommentsId?: string | null,
    updatedAt: string,
  } | null,
};

export type OnUpdatePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
  owner?: string | null,
};

export type OnUpdatePostSubscription = {
  onUpdatePost?:  {
    __typename: "Post",
    author?:  {
      __typename: "Author",
      createdAt: string,
      id: string,
      name?: string | null,
      owner?: string | null,
      updatedAt: string,
    } | null,
    body?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    postAuthorId?: string | null,
    title?: string | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateTacoRecipeSubscriptionVariables = {
  filter?: ModelSubscriptionTacoRecipeFilterInput | null,
};

export type OnUpdateTacoRecipeSubscription = {
  onUpdateTacoRecipe?:  {
    __typename: "TacoRecipe",
    createdAt: string,
    description?: string | null,
    id: string,
    title?: string | null,
    updatedAt: string,
  } | null,
};
