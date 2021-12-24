/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
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
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
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
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
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
        post {
          id
          title
          topic
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
      nextToken
    }
  }
`;
