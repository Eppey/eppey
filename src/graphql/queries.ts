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
        count
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
        count
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
          count
        }
        comments {
          nextToken
          count
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
        count
      }
      createdAt
      type
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
        userNickname
        title
        topic
        content
        views
        bookmarks
        comments {
          nextToken
          count
        }
        createdAt
        type
        updatedAt
        owner
      }
      nextToken
      count
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
          count
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
          createdAt
          type
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
      count
    }
  }
`;
export const getLatestPost = /* GraphQL */ `
  query GetLatestPost(
    $type: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getLatestPost(
      type: $type
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          count
        }
        createdAt
        type
        updatedAt
        owner
      }
      nextToken
      count
    }
  }
`;
export const getUserComment = /* GraphQL */ `
  query GetUserComment(
    $userID: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getUserComment(
      userID: $userID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          createdAt
          type
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
      count
    }
  }
`;
export const getPostComment = /* GraphQL */ `
  query GetPostComment(
    $postID: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getPostComment(
      postID: $postID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          createdAt
          type
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
      count
    }
  }
`;
