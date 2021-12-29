/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      nickname
      email
      school
      major
      posts {
        items {
          id
          userID
          userNickname
          title
          topic
          content
          views
          bookmarks
          createdAt
          type
          updatedAt
          owner
        }
        nextToken
      }
      comments {
        items {
          id
          userID
          postID
          likes
          content
          userNickname
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      points
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      nickname
      email
      school
      major
      posts {
        items {
          id
          userID
          userNickname
          title
          topic
          content
          views
          bookmarks
          createdAt
          type
          updatedAt
          owner
        }
        nextToken
      }
      comments {
        items {
          id
          userID
          postID
          likes
          content
          userNickname
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      points
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      nickname
      email
      school
      major
      posts {
        items {
          id
          userID
          userNickname
          title
          topic
          content
          views
          bookmarks
          createdAt
          type
          updatedAt
          owner
        }
        nextToken
      }
      comments {
        items {
          id
          userID
          postID
          likes
          content
          userNickname
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      points
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
      id
      userID
      userNickname
      title
      topic
      content
      views
      bookmarks
      comments {
        items {
          id
          userID
          postID
          likes
          content
          userNickname
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      type
      updatedAt
      owner
    }
  }
`;
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
      id
      userID
      userNickname
      title
      topic
      content
      views
      bookmarks
      comments {
        items {
          id
          userID
          postID
          likes
          content
          userNickname
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      type
      updatedAt
      owner
    }
  }
`;
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
      id
      userID
      userNickname
      title
      topic
      content
      views
      bookmarks
      comments {
        items {
          id
          userID
          postID
          likes
          content
          userNickname
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      type
      updatedAt
      owner
    }
  }
`;
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
      id
      userID
      postID
      likes
      content
      userNickname
      post {
        id
        userID
        userNickname
        title
        topic
        content
        views
        bookmarks
        comments {
          nextToken
        }
        createdAt
        type
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
      id
      userID
      postID
      likes
      content
      userNickname
      post {
        id
        userID
        userNickname
        title
        topic
        content
        views
        bookmarks
        comments {
          nextToken
        }
        createdAt
        type
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
      id
      userID
      postID
      likes
      content
      userNickname
      post {
        id
        userID
        userNickname
        title
        topic
        content
        views
        bookmarks
        comments {
          nextToken
        }
        createdAt
        type
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
