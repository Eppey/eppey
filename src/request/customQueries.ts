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
        userNickname
        title
        content
        topic
        views
        bookmarks
        comments {
          items {
            id
          }
        }
        createdAt
      }
      nextToken
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
        userNickname
        title
        topic
        content
        views
        bookmarks
        comments {
          items {
            content
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

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
