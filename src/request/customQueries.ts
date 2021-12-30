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
