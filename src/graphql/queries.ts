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
          userID
          title
          topic
          content
          views
          bookmarks
          createdAt
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
      userID
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
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
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
      createdAt
      updatedAt
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
        userID
        title
        topic
        content
        views
        bookmarks
        comments {
          nextToken
        }
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
        createdAt
        updatedAt
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
      userID
      postID
      likes
      content
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
        userID
        title
        topic
        content
        views
        bookmarks
        comments {
          nextToken
        }
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
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
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
        userID
        postID
        likes
        content
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
          userID
          title
          topic
          content
          views
          bookmarks
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
