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
          title
          topic
          createdAt
          updatedAt
          userPostsId
          owner
        }
        nextToken
      }
      comments {
        items {
          id
          content
          createdAt
          updatedAt
          userCommentsId
          postCommentsId
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
          title
          topic
          createdAt
          updatedAt
          userPostsId
          owner
        }
        nextToken
      }
      comments {
        items {
          id
          content
          createdAt
          updatedAt
          userCommentsId
          postCommentsId
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
          title
          topic
          createdAt
          updatedAt
          userPostsId
          owner
        }
        nextToken
      }
      comments {
        items {
          id
          content
          createdAt
          updatedAt
          userCommentsId
          postCommentsId
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
      title
      topic
      user {
        id
        nickname
        email
        school
        major
        posts {
          nextToken
        }
        comments {
          nextToken
        }
        points
        createdAt
        updatedAt
        owner
      }
      comments {
        items {
          id
          content
          createdAt
          updatedAt
          userCommentsId
          postCommentsId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      userPostsId
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
      title
      topic
      user {
        id
        nickname
        email
        school
        major
        posts {
          nextToken
        }
        comments {
          nextToken
        }
        points
        createdAt
        updatedAt
        owner
      }
      comments {
        items {
          id
          content
          createdAt
          updatedAt
          userCommentsId
          postCommentsId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      userPostsId
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
      title
      topic
      user {
        id
        nickname
        email
        school
        major
        posts {
          nextToken
        }
        comments {
          nextToken
        }
        points
        createdAt
        updatedAt
        owner
      }
      comments {
        items {
          id
          content
          createdAt
          updatedAt
          userCommentsId
          postCommentsId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      userPostsId
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
      user {
        id
        nickname
        email
        school
        major
        posts {
          nextToken
        }
        comments {
          nextToken
        }
        points
        createdAt
        updatedAt
        owner
      }
      post {
        id
        title
        topic
        user {
          id
          nickname
          email
          school
          major
          points
          createdAt
          updatedAt
          owner
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        userPostsId
        owner
      }
      content
      createdAt
      updatedAt
      userCommentsId
      postCommentsId
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
      user {
        id
        nickname
        email
        school
        major
        posts {
          nextToken
        }
        comments {
          nextToken
        }
        points
        createdAt
        updatedAt
        owner
      }
      post {
        id
        title
        topic
        user {
          id
          nickname
          email
          school
          major
          points
          createdAt
          updatedAt
          owner
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        userPostsId
        owner
      }
      content
      createdAt
      updatedAt
      userCommentsId
      postCommentsId
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
      user {
        id
        nickname
        email
        school
        major
        posts {
          nextToken
        }
        comments {
          nextToken
        }
        points
        createdAt
        updatedAt
        owner
      }
      post {
        id
        title
        topic
        user {
          id
          nickname
          email
          school
          major
          points
          createdAt
          updatedAt
          owner
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        userPostsId
        owner
      }
      content
      createdAt
      updatedAt
      userCommentsId
      postCommentsId
      owner
    }
  }
`;
