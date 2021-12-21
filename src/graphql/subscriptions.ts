/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
        }
        nextToken
      }
      points
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
        }
        nextToken
      }
      points
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
        }
        nextToken
      }
      points
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
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
      }
      comments {
        items {
          id
          content
          createdAt
          updatedAt
          userCommentsId
          postCommentsId
        }
        nextToken
      }
      createdAt
      updatedAt
      userPostsId
    }
  }
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
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
      }
      comments {
        items {
          id
          content
          createdAt
          updatedAt
          userCommentsId
          postCommentsId
        }
        nextToken
      }
      createdAt
      updatedAt
      userPostsId
    }
  }
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
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
      }
      comments {
        items {
          id
          content
          createdAt
          updatedAt
          userCommentsId
          postCommentsId
        }
        nextToken
      }
      createdAt
      updatedAt
      userPostsId
    }
  }
`;
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
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
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        userPostsId
      }
      content
      createdAt
      updatedAt
      userCommentsId
      postCommentsId
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
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
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        userPostsId
      }
      content
      createdAt
      updatedAt
      userCommentsId
      postCommentsId
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
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
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        userPostsId
      }
      content
      createdAt
      updatedAt
      userCommentsId
      postCommentsId
    }
  }
`;
