/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  nickname: string,
  email: string,
  school: string,
  major: string,
  points: number,
};

export type ModelUserConditionInput = {
  nickname?: ModelStringInput | null,
  email?: ModelStringInput | null,
  school?: ModelStringInput | null,
  major?: ModelStringInput | null,
  points?: ModelIntInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type User = {
  __typename: "User",
  id: string,
  nickname: string,
  email: string,
  school: string,
  major: string,
  posts?: ModelPostConnection | null,
  comments?: ModelCommentConnection | null,
  points: number,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ModelPostConnection = {
  __typename: "ModelPostConnection",
  items:  Array<Post | null >,
  nextToken?: string | null,
};

export type Post = {
  __typename: "Post",
  id: string,
  title: string,
  topic: string,
  content: string,
  user?: User | null,
  comments?: ModelCommentConnection | null,
  createdAt: string,
  updatedAt: string,
  userPostsId?: string | null,
  owner?: string | null,
};

export type ModelCommentConnection = {
  __typename: "ModelCommentConnection",
  items:  Array<Comment | null >,
  nextToken?: string | null,
};

export type Comment = {
  __typename: "Comment",
  id: string,
  user?: User | null,
  post?: Post | null,
  content: string,
  createdAt: string,
  updatedAt: string,
  userCommentsId?: string | null,
  postCommentsId?: string | null,
  owner?: string | null,
};

export type UpdateUserInput = {
  id: string,
  nickname?: string | null,
  email?: string | null,
  school?: string | null,
  major?: string | null,
  points?: number | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreatePostInput = {
  id?: string | null,
  title: string,
  topic: string,
  content: string,
  userPostsId?: string | null,
};

export type ModelPostConditionInput = {
  title?: ModelStringInput | null,
  topic?: ModelStringInput | null,
  content?: ModelStringInput | null,
  and?: Array< ModelPostConditionInput | null > | null,
  or?: Array< ModelPostConditionInput | null > | null,
  not?: ModelPostConditionInput | null,
  userPostsId?: ModelIDInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdatePostInput = {
  id: string,
  title?: string | null,
  topic?: string | null,
  content?: string | null,
  userPostsId?: string | null,
};

export type DeletePostInput = {
  id: string,
};

export type CreateCommentInput = {
  id?: string | null,
  content: string,
  userCommentsId?: string | null,
  postCommentsId?: string | null,
};

export type ModelCommentConditionInput = {
  content?: ModelStringInput | null,
  and?: Array< ModelCommentConditionInput | null > | null,
  or?: Array< ModelCommentConditionInput | null > | null,
  not?: ModelCommentConditionInput | null,
  userCommentsId?: ModelIDInput | null,
  postCommentsId?: ModelIDInput | null,
};

export type UpdateCommentInput = {
  id: string,
  content?: string | null,
  userCommentsId?: string | null,
  postCommentsId?: string | null,
};

export type DeleteCommentInput = {
  id: string,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  nickname?: ModelStringInput | null,
  email?: ModelStringInput | null,
  school?: ModelStringInput | null,
  major?: ModelStringInput | null,
  points?: ModelIntInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelPostFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  topic?: ModelStringInput | null,
  content?: ModelStringInput | null,
  and?: Array< ModelPostFilterInput | null > | null,
  or?: Array< ModelPostFilterInput | null > | null,
  not?: ModelPostFilterInput | null,
  userPostsId?: ModelIDInput | null,
};

export type ModelCommentFilterInput = {
  id?: ModelIDInput | null,
  content?: ModelStringInput | null,
  and?: Array< ModelCommentFilterInput | null > | null,
  or?: Array< ModelCommentFilterInput | null > | null,
  not?: ModelCommentFilterInput | null,
  userCommentsId?: ModelIDInput | null,
  postCommentsId?: ModelIDInput | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    nickname: string,
    email: string,
    school: string,
    major: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        topic: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        userPostsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        userCommentsId?: string | null,
        postCommentsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    points: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    nickname: string,
    email: string,
    school: string,
    major: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        topic: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        userPostsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        userCommentsId?: string | null,
        postCommentsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    points: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    nickname: string,
    email: string,
    school: string,
    major: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        topic: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        userPostsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        userCommentsId?: string | null,
        postCommentsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    points: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreatePostMutationVariables = {
  input: CreatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type CreatePostMutation = {
  createPost?:  {
    __typename: "Post",
    id: string,
    title: string,
    topic: string,
    content: string,
    user?:  {
      __typename: "User",
      id: string,
      nickname: string,
      email: string,
      school: string,
      major: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      points: number,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        userCommentsId?: string | null,
        postCommentsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userPostsId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdatePostMutationVariables = {
  input: UpdatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type UpdatePostMutation = {
  updatePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    topic: string,
    content: string,
    user?:  {
      __typename: "User",
      id: string,
      nickname: string,
      email: string,
      school: string,
      major: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      points: number,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        userCommentsId?: string | null,
        postCommentsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userPostsId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeletePostMutationVariables = {
  input: DeletePostInput,
  condition?: ModelPostConditionInput | null,
};

export type DeletePostMutation = {
  deletePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    topic: string,
    content: string,
    user?:  {
      __typename: "User",
      id: string,
      nickname: string,
      email: string,
      school: string,
      major: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      points: number,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        userCommentsId?: string | null,
        postCommentsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userPostsId?: string | null,
    owner?: string | null,
  } | null,
};

export type CreateCommentMutationVariables = {
  input: CreateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type CreateCommentMutation = {
  createComment?:  {
    __typename: "Comment",
    id: string,
    user?:  {
      __typename: "User",
      id: string,
      nickname: string,
      email: string,
      school: string,
      major: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      points: number,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      topic: string,
      content: string,
      user?:  {
        __typename: "User",
        id: string,
        nickname: string,
        email: string,
        school: string,
        major: string,
        points: number,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userPostsId?: string | null,
      owner?: string | null,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
    userCommentsId?: string | null,
    postCommentsId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateCommentMutationVariables = {
  input: UpdateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type UpdateCommentMutation = {
  updateComment?:  {
    __typename: "Comment",
    id: string,
    user?:  {
      __typename: "User",
      id: string,
      nickname: string,
      email: string,
      school: string,
      major: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      points: number,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      topic: string,
      content: string,
      user?:  {
        __typename: "User",
        id: string,
        nickname: string,
        email: string,
        school: string,
        major: string,
        points: number,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userPostsId?: string | null,
      owner?: string | null,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
    userCommentsId?: string | null,
    postCommentsId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteCommentMutationVariables = {
  input: DeleteCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type DeleteCommentMutation = {
  deleteComment?:  {
    __typename: "Comment",
    id: string,
    user?:  {
      __typename: "User",
      id: string,
      nickname: string,
      email: string,
      school: string,
      major: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      points: number,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      topic: string,
      content: string,
      user?:  {
        __typename: "User",
        id: string,
        nickname: string,
        email: string,
        school: string,
        major: string,
        points: number,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userPostsId?: string | null,
      owner?: string | null,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
    userCommentsId?: string | null,
    postCommentsId?: string | null,
    owner?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    nickname: string,
    email: string,
    school: string,
    major: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        topic: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        userPostsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        userCommentsId?: string | null,
        postCommentsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    points: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      nickname: string,
      email: string,
      school: string,
      major: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      points: number,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPostQueryVariables = {
  id: string,
};

export type GetPostQuery = {
  getPost?:  {
    __typename: "Post",
    id: string,
    title: string,
    topic: string,
    content: string,
    user?:  {
      __typename: "User",
      id: string,
      nickname: string,
      email: string,
      school: string,
      major: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      points: number,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        userCommentsId?: string | null,
        postCommentsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userPostsId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListPostsQueryVariables = {
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostsQuery = {
  listPosts?:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      title: string,
      topic: string,
      content: string,
      user?:  {
        __typename: "User",
        id: string,
        nickname: string,
        email: string,
        school: string,
        major: string,
        points: number,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userPostsId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCommentQueryVariables = {
  id: string,
};

export type GetCommentQuery = {
  getComment?:  {
    __typename: "Comment",
    id: string,
    user?:  {
      __typename: "User",
      id: string,
      nickname: string,
      email: string,
      school: string,
      major: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      points: number,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      topic: string,
      content: string,
      user?:  {
        __typename: "User",
        id: string,
        nickname: string,
        email: string,
        school: string,
        major: string,
        points: number,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userPostsId?: string | null,
      owner?: string | null,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
    userCommentsId?: string | null,
    postCommentsId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListCommentsQueryVariables = {
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommentsQuery = {
  listComments?:  {
    __typename: "ModelCommentConnection",
    items:  Array< {
      __typename: "Comment",
      id: string,
      user?:  {
        __typename: "User",
        id: string,
        nickname: string,
        email: string,
        school: string,
        major: string,
        points: number,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      post?:  {
        __typename: "Post",
        id: string,
        title: string,
        topic: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        userPostsId?: string | null,
        owner?: string | null,
      } | null,
      content: string,
      createdAt: string,
      updatedAt: string,
      userCommentsId?: string | null,
      postCommentsId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    nickname: string,
    email: string,
    school: string,
    major: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        topic: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        userPostsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        userCommentsId?: string | null,
        postCommentsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    points: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    nickname: string,
    email: string,
    school: string,
    major: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        topic: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        userPostsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        userCommentsId?: string | null,
        postCommentsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    points: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    nickname: string,
    email: string,
    school: string,
    major: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        topic: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        userPostsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        userCommentsId?: string | null,
        postCommentsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    points: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreatePostSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreatePostSubscription = {
  onCreatePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    topic: string,
    content: string,
    user?:  {
      __typename: "User",
      id: string,
      nickname: string,
      email: string,
      school: string,
      major: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      points: number,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        userCommentsId?: string | null,
        postCommentsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userPostsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdatePostSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdatePostSubscription = {
  onUpdatePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    topic: string,
    content: string,
    user?:  {
      __typename: "User",
      id: string,
      nickname: string,
      email: string,
      school: string,
      major: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      points: number,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        userCommentsId?: string | null,
        postCommentsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userPostsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeletePostSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeletePostSubscription = {
  onDeletePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    topic: string,
    content: string,
    user?:  {
      __typename: "User",
      id: string,
      nickname: string,
      email: string,
      school: string,
      major: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      points: number,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        userCommentsId?: string | null,
        postCommentsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userPostsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreateCommentSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateCommentSubscription = {
  onCreateComment?:  {
    __typename: "Comment",
    id: string,
    user?:  {
      __typename: "User",
      id: string,
      nickname: string,
      email: string,
      school: string,
      major: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      points: number,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      topic: string,
      content: string,
      user?:  {
        __typename: "User",
        id: string,
        nickname: string,
        email: string,
        school: string,
        major: string,
        points: number,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userPostsId?: string | null,
      owner?: string | null,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
    userCommentsId?: string | null,
    postCommentsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateCommentSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateCommentSubscription = {
  onUpdateComment?:  {
    __typename: "Comment",
    id: string,
    user?:  {
      __typename: "User",
      id: string,
      nickname: string,
      email: string,
      school: string,
      major: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      points: number,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      topic: string,
      content: string,
      user?:  {
        __typename: "User",
        id: string,
        nickname: string,
        email: string,
        school: string,
        major: string,
        points: number,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userPostsId?: string | null,
      owner?: string | null,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
    userCommentsId?: string | null,
    postCommentsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteCommentSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteCommentSubscription = {
  onDeleteComment?:  {
    __typename: "Comment",
    id: string,
    user?:  {
      __typename: "User",
      id: string,
      nickname: string,
      email: string,
      school: string,
      major: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      points: number,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      topic: string,
      content: string,
      user?:  {
        __typename: "User",
        id: string,
        nickname: string,
        email: string,
        school: string,
        major: string,
        points: number,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userPostsId?: string | null,
      owner?: string | null,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
    userCommentsId?: string | null,
    postCommentsId?: string | null,
    owner?: string | null,
  } | null,
};
