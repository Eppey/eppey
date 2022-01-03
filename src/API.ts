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
  bookmarks?: ModelBookmarkConnection | null,
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
  userID: string,
  userNickname: string,
  title: string,
  topic: string,
  content: string,
  views: number,
  bookmarks: number,
  comments?: ModelCommentConnection | null,
  createdAt: string,
  type?: string | null,
  updatedAt: string,
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
  userID: string,
  postID: string,
  likes: number,
  content: string,
  userNickname: string,
  post?: Post | null,
  replies?: ModelReplyConnection | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ModelReplyConnection = {
  __typename: "ModelReplyConnection",
  items:  Array<Reply | null >,
  nextToken?: string | null,
};

export type Reply = {
  __typename: "Reply",
  id: string,
  userID: string,
  commentID: string,
  content: string,
  userNickname: string,
  comment?: Comment | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ModelBookmarkConnection = {
  __typename: "ModelBookmarkConnection",
  items:  Array<Bookmark | null >,
  nextToken?: string | null,
};

export type Bookmark = {
  __typename: "Bookmark",
  userID: string,
  postID: string,
  post?: Post | null,
  createdAt: string,
  id: string,
  updatedAt: string,
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
  userID: string,
  userNickname: string,
  title: string,
  topic: string,
  content: string,
  views: number,
  bookmarks: number,
  createdAt?: string | null,
  type?: string | null,
};

export type ModelPostConditionInput = {
  userID?: ModelIDInput | null,
  userNickname?: ModelStringInput | null,
  title?: ModelStringInput | null,
  topic?: ModelStringInput | null,
  content?: ModelStringInput | null,
  views?: ModelIntInput | null,
  bookmarks?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  type?: ModelStringInput | null,
  and?: Array< ModelPostConditionInput | null > | null,
  or?: Array< ModelPostConditionInput | null > | null,
  not?: ModelPostConditionInput | null,
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
  userID?: string | null,
  userNickname?: string | null,
  title?: string | null,
  topic?: string | null,
  content?: string | null,
  views?: number | null,
  bookmarks?: number | null,
  createdAt?: string | null,
  type?: string | null,
};

export type DeletePostInput = {
  id: string,
};

export type CreateCommentInput = {
  id?: string | null,
  userID: string,
  postID: string,
  likes: number,
  content: string,
  userNickname: string,
  createdAt?: string | null,
};

export type ModelCommentConditionInput = {
  userID?: ModelIDInput | null,
  postID?: ModelIDInput | null,
  likes?: ModelIntInput | null,
  content?: ModelStringInput | null,
  userNickname?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelCommentConditionInput | null > | null,
  or?: Array< ModelCommentConditionInput | null > | null,
  not?: ModelCommentConditionInput | null,
};

export type UpdateCommentInput = {
  id: string,
  userID?: string | null,
  postID?: string | null,
  likes?: number | null,
  content?: string | null,
  userNickname?: string | null,
  createdAt?: string | null,
};

export type DeleteCommentInput = {
  id: string,
};

export type CreateReplyInput = {
  id?: string | null,
  userID: string,
  commentID: string,
  content: string,
  userNickname: string,
  createdAt?: string | null,
};

export type ModelReplyConditionInput = {
  userID?: ModelIDInput | null,
  commentID?: ModelIDInput | null,
  content?: ModelStringInput | null,
  userNickname?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelReplyConditionInput | null > | null,
  or?: Array< ModelReplyConditionInput | null > | null,
  not?: ModelReplyConditionInput | null,
};

export type UpdateReplyInput = {
  id: string,
  userID?: string | null,
  commentID?: string | null,
  content?: string | null,
  userNickname?: string | null,
  createdAt?: string | null,
};

export type DeleteReplyInput = {
  id: string,
};

export type CreateBookmarkInput = {
  userID: string,
  postID: string,
  createdAt?: string | null,
  id?: string | null,
};

export type ModelBookmarkConditionInput = {
  userID?: ModelIDInput | null,
  postID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelBookmarkConditionInput | null > | null,
  or?: Array< ModelBookmarkConditionInput | null > | null,
  not?: ModelBookmarkConditionInput | null,
};

export type UpdateBookmarkInput = {
  userID?: string | null,
  postID?: string | null,
  createdAt?: string | null,
};

export type DeleteBookmarkInput = {
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
  userID?: ModelIDInput | null,
  userNickname?: ModelStringInput | null,
  title?: ModelStringInput | null,
  topic?: ModelStringInput | null,
  content?: ModelStringInput | null,
  views?: ModelIntInput | null,
  bookmarks?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  type?: ModelStringInput | null,
  and?: Array< ModelPostFilterInput | null > | null,
  or?: Array< ModelPostFilterInput | null > | null,
  not?: ModelPostFilterInput | null,
};

export type ModelCommentFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  postID?: ModelIDInput | null,
  likes?: ModelIntInput | null,
  content?: ModelStringInput | null,
  userNickname?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelCommentFilterInput | null > | null,
  or?: Array< ModelCommentFilterInput | null > | null,
  not?: ModelCommentFilterInput | null,
};

export type ModelReplyFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  commentID?: ModelIDInput | null,
  content?: ModelStringInput | null,
  userNickname?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelReplyFilterInput | null > | null,
  or?: Array< ModelReplyFilterInput | null > | null,
  not?: ModelReplyFilterInput | null,
};

export type ModelBookmarkFilterInput = {
  userID?: ModelIDInput | null,
  postID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelBookmarkFilterInput | null > | null,
  or?: Array< ModelBookmarkFilterInput | null > | null,
  not?: ModelBookmarkFilterInput | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


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
        userID: string,
        userNickname: string,
        title: string,
        topic: string,
        content: string,
        views: number,
        bookmarks: number,
        createdAt: string,
        type?: string | null,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        userID: string,
        postID: string,
        likes: number,
        content: string,
        userNickname: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    bookmarks?:  {
      __typename: "ModelBookmarkConnection",
      items:  Array< {
        __typename: "Bookmark",
        userID: string,
        postID: string,
        createdAt: string,
        id: string,
        updatedAt: string,
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
        userID: string,
        userNickname: string,
        title: string,
        topic: string,
        content: string,
        views: number,
        bookmarks: number,
        createdAt: string,
        type?: string | null,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        userID: string,
        postID: string,
        likes: number,
        content: string,
        userNickname: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    bookmarks?:  {
      __typename: "ModelBookmarkConnection",
      items:  Array< {
        __typename: "Bookmark",
        userID: string,
        postID: string,
        createdAt: string,
        id: string,
        updatedAt: string,
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
        userID: string,
        userNickname: string,
        title: string,
        topic: string,
        content: string,
        views: number,
        bookmarks: number,
        createdAt: string,
        type?: string | null,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        userID: string,
        postID: string,
        likes: number,
        content: string,
        userNickname: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    bookmarks?:  {
      __typename: "ModelBookmarkConnection",
      items:  Array< {
        __typename: "Bookmark",
        userID: string,
        postID: string,
        createdAt: string,
        id: string,
        updatedAt: string,
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
    userID: string,
    userNickname: string,
    title: string,
    topic: string,
    content: string,
    views: number,
    bookmarks: number,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        userID: string,
        postID: string,
        likes: number,
        content: string,
        userNickname: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    type?: string | null,
    updatedAt: string,
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
    userID: string,
    userNickname: string,
    title: string,
    topic: string,
    content: string,
    views: number,
    bookmarks: number,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        userID: string,
        postID: string,
        likes: number,
        content: string,
        userNickname: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    type?: string | null,
    updatedAt: string,
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
    userID: string,
    userNickname: string,
    title: string,
    topic: string,
    content: string,
    views: number,
    bookmarks: number,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        userID: string,
        postID: string,
        likes: number,
        content: string,
        userNickname: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    type?: string | null,
    updatedAt: string,
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
    userID: string,
    postID: string,
    likes: number,
    content: string,
    userNickname: string,
    post?:  {
      __typename: "Post",
      id: string,
      userID: string,
      userNickname: string,
      title: string,
      topic: string,
      content: string,
      views: number,
      bookmarks: number,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      type?: string | null,
      updatedAt: string,
      owner?: string | null,
    } | null,
    replies?:  {
      __typename: "ModelReplyConnection",
      items:  Array< {
        __typename: "Reply",
        id: string,
        userID: string,
        commentID: string,
        content: string,
        userNickname: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
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
    userID: string,
    postID: string,
    likes: number,
    content: string,
    userNickname: string,
    post?:  {
      __typename: "Post",
      id: string,
      userID: string,
      userNickname: string,
      title: string,
      topic: string,
      content: string,
      views: number,
      bookmarks: number,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      type?: string | null,
      updatedAt: string,
      owner?: string | null,
    } | null,
    replies?:  {
      __typename: "ModelReplyConnection",
      items:  Array< {
        __typename: "Reply",
        id: string,
        userID: string,
        commentID: string,
        content: string,
        userNickname: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
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
    userID: string,
    postID: string,
    likes: number,
    content: string,
    userNickname: string,
    post?:  {
      __typename: "Post",
      id: string,
      userID: string,
      userNickname: string,
      title: string,
      topic: string,
      content: string,
      views: number,
      bookmarks: number,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      type?: string | null,
      updatedAt: string,
      owner?: string | null,
    } | null,
    replies?:  {
      __typename: "ModelReplyConnection",
      items:  Array< {
        __typename: "Reply",
        id: string,
        userID: string,
        commentID: string,
        content: string,
        userNickname: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateReplyMutationVariables = {
  input: CreateReplyInput,
  condition?: ModelReplyConditionInput | null,
};

export type CreateReplyMutation = {
  createReply?:  {
    __typename: "Reply",
    id: string,
    userID: string,
    commentID: string,
    content: string,
    userNickname: string,
    comment?:  {
      __typename: "Comment",
      id: string,
      userID: string,
      postID: string,
      likes: number,
      content: string,
      userNickname: string,
      post?:  {
        __typename: "Post",
        id: string,
        userID: string,
        userNickname: string,
        title: string,
        topic: string,
        content: string,
        views: number,
        bookmarks: number,
        createdAt: string,
        type?: string | null,
        updatedAt: string,
        owner?: string | null,
      } | null,
      replies?:  {
        __typename: "ModelReplyConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateReplyMutationVariables = {
  input: UpdateReplyInput,
  condition?: ModelReplyConditionInput | null,
};

export type UpdateReplyMutation = {
  updateReply?:  {
    __typename: "Reply",
    id: string,
    userID: string,
    commentID: string,
    content: string,
    userNickname: string,
    comment?:  {
      __typename: "Comment",
      id: string,
      userID: string,
      postID: string,
      likes: number,
      content: string,
      userNickname: string,
      post?:  {
        __typename: "Post",
        id: string,
        userID: string,
        userNickname: string,
        title: string,
        topic: string,
        content: string,
        views: number,
        bookmarks: number,
        createdAt: string,
        type?: string | null,
        updatedAt: string,
        owner?: string | null,
      } | null,
      replies?:  {
        __typename: "ModelReplyConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteReplyMutationVariables = {
  input: DeleteReplyInput,
  condition?: ModelReplyConditionInput | null,
};

export type DeleteReplyMutation = {
  deleteReply?:  {
    __typename: "Reply",
    id: string,
    userID: string,
    commentID: string,
    content: string,
    userNickname: string,
    comment?:  {
      __typename: "Comment",
      id: string,
      userID: string,
      postID: string,
      likes: number,
      content: string,
      userNickname: string,
      post?:  {
        __typename: "Post",
        id: string,
        userID: string,
        userNickname: string,
        title: string,
        topic: string,
        content: string,
        views: number,
        bookmarks: number,
        createdAt: string,
        type?: string | null,
        updatedAt: string,
        owner?: string | null,
      } | null,
      replies?:  {
        __typename: "ModelReplyConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateBookmarkMutationVariables = {
  input: CreateBookmarkInput,
  condition?: ModelBookmarkConditionInput | null,
};

export type CreateBookmarkMutation = {
  createBookmark?:  {
    __typename: "Bookmark",
    userID: string,
    postID: string,
    post?:  {
      __typename: "Post",
      id: string,
      userID: string,
      userNickname: string,
      title: string,
      topic: string,
      content: string,
      views: number,
      bookmarks: number,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      type?: string | null,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    id: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateBookmarkMutationVariables = {
  input: UpdateBookmarkInput,
  condition?: ModelBookmarkConditionInput | null,
};

export type UpdateBookmarkMutation = {
  updateBookmark?:  {
    __typename: "Bookmark",
    userID: string,
    postID: string,
    post?:  {
      __typename: "Post",
      id: string,
      userID: string,
      userNickname: string,
      title: string,
      topic: string,
      content: string,
      views: number,
      bookmarks: number,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      type?: string | null,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    id: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteBookmarkMutationVariables = {
  input: DeleteBookmarkInput,
  condition?: ModelBookmarkConditionInput | null,
};

export type DeleteBookmarkMutation = {
  deleteBookmark?:  {
    __typename: "Bookmark",
    userID: string,
    postID: string,
    post?:  {
      __typename: "Post",
      id: string,
      userID: string,
      userNickname: string,
      title: string,
      topic: string,
      content: string,
      views: number,
      bookmarks: number,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      type?: string | null,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    id: string,
    updatedAt: string,
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
        userID: string,
        userNickname: string,
        title: string,
        topic: string,
        content: string,
        views: number,
        bookmarks: number,
        createdAt: string,
        type?: string | null,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        userID: string,
        postID: string,
        likes: number,
        content: string,
        userNickname: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    bookmarks?:  {
      __typename: "ModelBookmarkConnection",
      items:  Array< {
        __typename: "Bookmark",
        userID: string,
        postID: string,
        createdAt: string,
        id: string,
        updatedAt: string,
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
      bookmarks?:  {
        __typename: "ModelBookmarkConnection",
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
    userID: string,
    userNickname: string,
    title: string,
    topic: string,
    content: string,
    views: number,
    bookmarks: number,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        userID: string,
        postID: string,
        likes: number,
        content: string,
        userNickname: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    type?: string | null,
    updatedAt: string,
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
      userID: string,
      userNickname: string,
      title: string,
      topic: string,
      content: string,
      views: number,
      bookmarks: number,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      type?: string | null,
      updatedAt: string,
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
    userID: string,
    postID: string,
    likes: number,
    content: string,
    userNickname: string,
    post?:  {
      __typename: "Post",
      id: string,
      userID: string,
      userNickname: string,
      title: string,
      topic: string,
      content: string,
      views: number,
      bookmarks: number,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      type?: string | null,
      updatedAt: string,
      owner?: string | null,
    } | null,
    replies?:  {
      __typename: "ModelReplyConnection",
      items:  Array< {
        __typename: "Reply",
        id: string,
        userID: string,
        commentID: string,
        content: string,
        userNickname: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
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
      userID: string,
      postID: string,
      likes: number,
      content: string,
      userNickname: string,
      post?:  {
        __typename: "Post",
        id: string,
        userID: string,
        userNickname: string,
        title: string,
        topic: string,
        content: string,
        views: number,
        bookmarks: number,
        createdAt: string,
        type?: string | null,
        updatedAt: string,
        owner?: string | null,
      } | null,
      replies?:  {
        __typename: "ModelReplyConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetReplyQueryVariables = {
  id: string,
};

export type GetReplyQuery = {
  getReply?:  {
    __typename: "Reply",
    id: string,
    userID: string,
    commentID: string,
    content: string,
    userNickname: string,
    comment?:  {
      __typename: "Comment",
      id: string,
      userID: string,
      postID: string,
      likes: number,
      content: string,
      userNickname: string,
      post?:  {
        __typename: "Post",
        id: string,
        userID: string,
        userNickname: string,
        title: string,
        topic: string,
        content: string,
        views: number,
        bookmarks: number,
        createdAt: string,
        type?: string | null,
        updatedAt: string,
        owner?: string | null,
      } | null,
      replies?:  {
        __typename: "ModelReplyConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListRepliesQueryVariables = {
  filter?: ModelReplyFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRepliesQuery = {
  listReplies?:  {
    __typename: "ModelReplyConnection",
    items:  Array< {
      __typename: "Reply",
      id: string,
      userID: string,
      commentID: string,
      content: string,
      userNickname: string,
      comment?:  {
        __typename: "Comment",
        id: string,
        userID: string,
        postID: string,
        likes: number,
        content: string,
        userNickname: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetBookmarkQueryVariables = {
  id: string,
};

export type GetBookmarkQuery = {
  getBookmark?:  {
    __typename: "Bookmark",
    userID: string,
    postID: string,
    post?:  {
      __typename: "Post",
      id: string,
      userID: string,
      userNickname: string,
      title: string,
      topic: string,
      content: string,
      views: number,
      bookmarks: number,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      type?: string | null,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    id: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListBookmarksQueryVariables = {
  filter?: ModelBookmarkFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBookmarksQuery = {
  listBookmarks?:  {
    __typename: "ModelBookmarkConnection",
    items:  Array< {
      __typename: "Bookmark",
      userID: string,
      postID: string,
      post?:  {
        __typename: "Post",
        id: string,
        userID: string,
        userNickname: string,
        title: string,
        topic: string,
        content: string,
        views: number,
        bookmarks: number,
        createdAt: string,
        type?: string | null,
        updatedAt: string,
        owner?: string | null,
      } | null,
      createdAt: string,
      id: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserPostQueryVariables = {
  userID?: string | null,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GetUserPostQuery = {
  getUserPost?:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      userID: string,
      userNickname: string,
      title: string,
      topic: string,
      content: string,
      views: number,
      bookmarks: number,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      type?: string | null,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetLatestPostQueryVariables = {
  type?: string | null,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GetLatestPostQuery = {
  getLatestPost?:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      userID: string,
      userNickname: string,
      title: string,
      topic: string,
      content: string,
      views: number,
      bookmarks: number,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      type?: string | null,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserCommentQueryVariables = {
  userID?: string | null,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GetUserCommentQuery = {
  getUserComment?:  {
    __typename: "ModelCommentConnection",
    items:  Array< {
      __typename: "Comment",
      id: string,
      userID: string,
      postID: string,
      likes: number,
      content: string,
      userNickname: string,
      post?:  {
        __typename: "Post",
        id: string,
        userID: string,
        userNickname: string,
        title: string,
        topic: string,
        content: string,
        views: number,
        bookmarks: number,
        createdAt: string,
        type?: string | null,
        updatedAt: string,
        owner?: string | null,
      } | null,
      replies?:  {
        __typename: "ModelReplyConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPostCommentQueryVariables = {
  postID?: string | null,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GetPostCommentQuery = {
  getPostComment?:  {
    __typename: "ModelCommentConnection",
    items:  Array< {
      __typename: "Comment",
      id: string,
      userID: string,
      postID: string,
      likes: number,
      content: string,
      userNickname: string,
      post?:  {
        __typename: "Post",
        id: string,
        userID: string,
        userNickname: string,
        title: string,
        topic: string,
        content: string,
        views: number,
        bookmarks: number,
        createdAt: string,
        type?: string | null,
        updatedAt: string,
        owner?: string | null,
      } | null,
      replies?:  {
        __typename: "ModelReplyConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCommentReplyQueryVariables = {
  commentID?: string | null,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelReplyFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GetCommentReplyQuery = {
  getCommentReply?:  {
    __typename: "ModelReplyConnection",
    items:  Array< {
      __typename: "Reply",
      id: string,
      userID: string,
      commentID: string,
      content: string,
      userNickname: string,
      comment?:  {
        __typename: "Comment",
        id: string,
        userID: string,
        postID: string,
        likes: number,
        content: string,
        userNickname: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserBookmarkQueryVariables = {
  userID?: string | null,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelBookmarkFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GetUserBookmarkQuery = {
  getUserBookmark?:  {
    __typename: "ModelBookmarkConnection",
    items:  Array< {
      __typename: "Bookmark",
      userID: string,
      postID: string,
      post?:  {
        __typename: "Post",
        id: string,
        userID: string,
        userNickname: string,
        title: string,
        topic: string,
        content: string,
        views: number,
        bookmarks: number,
        createdAt: string,
        type?: string | null,
        updatedAt: string,
        owner?: string | null,
      } | null,
      createdAt: string,
      id: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
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
        userID: string,
        userNickname: string,
        title: string,
        topic: string,
        content: string,
        views: number,
        bookmarks: number,
        createdAt: string,
        type?: string | null,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        userID: string,
        postID: string,
        likes: number,
        content: string,
        userNickname: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    bookmarks?:  {
      __typename: "ModelBookmarkConnection",
      items:  Array< {
        __typename: "Bookmark",
        userID: string,
        postID: string,
        createdAt: string,
        id: string,
        updatedAt: string,
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
        userID: string,
        userNickname: string,
        title: string,
        topic: string,
        content: string,
        views: number,
        bookmarks: number,
        createdAt: string,
        type?: string | null,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        userID: string,
        postID: string,
        likes: number,
        content: string,
        userNickname: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    bookmarks?:  {
      __typename: "ModelBookmarkConnection",
      items:  Array< {
        __typename: "Bookmark",
        userID: string,
        postID: string,
        createdAt: string,
        id: string,
        updatedAt: string,
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
        userID: string,
        userNickname: string,
        title: string,
        topic: string,
        content: string,
        views: number,
        bookmarks: number,
        createdAt: string,
        type?: string | null,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        userID: string,
        postID: string,
        likes: number,
        content: string,
        userNickname: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    bookmarks?:  {
      __typename: "ModelBookmarkConnection",
      items:  Array< {
        __typename: "Bookmark",
        userID: string,
        postID: string,
        createdAt: string,
        id: string,
        updatedAt: string,
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
    userID: string,
    userNickname: string,
    title: string,
    topic: string,
    content: string,
    views: number,
    bookmarks: number,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        userID: string,
        postID: string,
        likes: number,
        content: string,
        userNickname: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    type?: string | null,
    updatedAt: string,
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
    userID: string,
    userNickname: string,
    title: string,
    topic: string,
    content: string,
    views: number,
    bookmarks: number,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        userID: string,
        postID: string,
        likes: number,
        content: string,
        userNickname: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    type?: string | null,
    updatedAt: string,
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
    userID: string,
    userNickname: string,
    title: string,
    topic: string,
    content: string,
    views: number,
    bookmarks: number,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        userID: string,
        postID: string,
        likes: number,
        content: string,
        userNickname: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    type?: string | null,
    updatedAt: string,
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
    userID: string,
    postID: string,
    likes: number,
    content: string,
    userNickname: string,
    post?:  {
      __typename: "Post",
      id: string,
      userID: string,
      userNickname: string,
      title: string,
      topic: string,
      content: string,
      views: number,
      bookmarks: number,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      type?: string | null,
      updatedAt: string,
      owner?: string | null,
    } | null,
    replies?:  {
      __typename: "ModelReplyConnection",
      items:  Array< {
        __typename: "Reply",
        id: string,
        userID: string,
        commentID: string,
        content: string,
        userNickname: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
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
    userID: string,
    postID: string,
    likes: number,
    content: string,
    userNickname: string,
    post?:  {
      __typename: "Post",
      id: string,
      userID: string,
      userNickname: string,
      title: string,
      topic: string,
      content: string,
      views: number,
      bookmarks: number,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      type?: string | null,
      updatedAt: string,
      owner?: string | null,
    } | null,
    replies?:  {
      __typename: "ModelReplyConnection",
      items:  Array< {
        __typename: "Reply",
        id: string,
        userID: string,
        commentID: string,
        content: string,
        userNickname: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
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
    userID: string,
    postID: string,
    likes: number,
    content: string,
    userNickname: string,
    post?:  {
      __typename: "Post",
      id: string,
      userID: string,
      userNickname: string,
      title: string,
      topic: string,
      content: string,
      views: number,
      bookmarks: number,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      type?: string | null,
      updatedAt: string,
      owner?: string | null,
    } | null,
    replies?:  {
      __typename: "ModelReplyConnection",
      items:  Array< {
        __typename: "Reply",
        id: string,
        userID: string,
        commentID: string,
        content: string,
        userNickname: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateReplySubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateReplySubscription = {
  onCreateReply?:  {
    __typename: "Reply",
    id: string,
    userID: string,
    commentID: string,
    content: string,
    userNickname: string,
    comment?:  {
      __typename: "Comment",
      id: string,
      userID: string,
      postID: string,
      likes: number,
      content: string,
      userNickname: string,
      post?:  {
        __typename: "Post",
        id: string,
        userID: string,
        userNickname: string,
        title: string,
        topic: string,
        content: string,
        views: number,
        bookmarks: number,
        createdAt: string,
        type?: string | null,
        updatedAt: string,
        owner?: string | null,
      } | null,
      replies?:  {
        __typename: "ModelReplyConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateReplySubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateReplySubscription = {
  onUpdateReply?:  {
    __typename: "Reply",
    id: string,
    userID: string,
    commentID: string,
    content: string,
    userNickname: string,
    comment?:  {
      __typename: "Comment",
      id: string,
      userID: string,
      postID: string,
      likes: number,
      content: string,
      userNickname: string,
      post?:  {
        __typename: "Post",
        id: string,
        userID: string,
        userNickname: string,
        title: string,
        topic: string,
        content: string,
        views: number,
        bookmarks: number,
        createdAt: string,
        type?: string | null,
        updatedAt: string,
        owner?: string | null,
      } | null,
      replies?:  {
        __typename: "ModelReplyConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteReplySubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteReplySubscription = {
  onDeleteReply?:  {
    __typename: "Reply",
    id: string,
    userID: string,
    commentID: string,
    content: string,
    userNickname: string,
    comment?:  {
      __typename: "Comment",
      id: string,
      userID: string,
      postID: string,
      likes: number,
      content: string,
      userNickname: string,
      post?:  {
        __typename: "Post",
        id: string,
        userID: string,
        userNickname: string,
        title: string,
        topic: string,
        content: string,
        views: number,
        bookmarks: number,
        createdAt: string,
        type?: string | null,
        updatedAt: string,
        owner?: string | null,
      } | null,
      replies?:  {
        __typename: "ModelReplyConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateBookmarkSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateBookmarkSubscription = {
  onCreateBookmark?:  {
    __typename: "Bookmark",
    userID: string,
    postID: string,
    post?:  {
      __typename: "Post",
      id: string,
      userID: string,
      userNickname: string,
      title: string,
      topic: string,
      content: string,
      views: number,
      bookmarks: number,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      type?: string | null,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    id: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateBookmarkSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateBookmarkSubscription = {
  onUpdateBookmark?:  {
    __typename: "Bookmark",
    userID: string,
    postID: string,
    post?:  {
      __typename: "Post",
      id: string,
      userID: string,
      userNickname: string,
      title: string,
      topic: string,
      content: string,
      views: number,
      bookmarks: number,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      type?: string | null,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    id: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteBookmarkSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteBookmarkSubscription = {
  onDeleteBookmark?:  {
    __typename: "Bookmark",
    userID: string,
    postID: string,
    post?:  {
      __typename: "Post",
      id: string,
      userID: string,
      userNickname: string,
      title: string,
      topic: string,
      content: string,
      views: number,
      bookmarks: number,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      type?: string | null,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    id: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};
