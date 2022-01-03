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
      bookmarks {
        items {
          userID
          postID
          createdAt
          id
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
      bookmarks {
        items {
          userID
          postID
          createdAt
          id
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
      bookmarks {
        items {
          userID
          postID
          createdAt
          id
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($owner: String) {
    onCreatePost(owner: $owner) {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost($owner: String) {
    onUpdatePost(owner: $owner) {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost($owner: String) {
    onDeletePost(owner: $owner) {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($owner: String) {
    onCreateComment(owner: $owner) {
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
      replies {
        items {
          id
          userID
          commentID
          content
          userNickname
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($owner: String) {
    onUpdateComment(owner: $owner) {
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
      replies {
        items {
          id
          userID
          commentID
          content
          userNickname
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($owner: String) {
    onDeleteComment(owner: $owner) {
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
      replies {
        items {
          id
          userID
          commentID
          content
          userNickname
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateReply = /* GraphQL */ `
  subscription OnCreateReply($owner: String) {
    onCreateReply(owner: $owner) {
      id
      userID
      commentID
      content
      userNickname
      comment {
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
        replies {
          nextToken
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
export const onUpdateReply = /* GraphQL */ `
  subscription OnUpdateReply($owner: String) {
    onUpdateReply(owner: $owner) {
      id
      userID
      commentID
      content
      userNickname
      comment {
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
        replies {
          nextToken
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
export const onDeleteReply = /* GraphQL */ `
  subscription OnDeleteReply($owner: String) {
    onDeleteReply(owner: $owner) {
      id
      userID
      commentID
      content
      userNickname
      comment {
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
        replies {
          nextToken
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
export const onCreateBookmark = /* GraphQL */ `
  subscription OnCreateBookmark($owner: String) {
    onCreateBookmark(owner: $owner) {
      userID
      postID
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
      id
      updatedAt
      owner
    }
  }
`;
export const onUpdateBookmark = /* GraphQL */ `
  subscription OnUpdateBookmark($owner: String) {
    onUpdateBookmark(owner: $owner) {
      userID
      postID
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
      id
      updatedAt
      owner
    }
  }
`;
export const onDeleteBookmark = /* GraphQL */ `
  subscription OnDeleteBookmark($owner: String) {
    onDeleteBookmark(owner: $owner) {
      userID
      postID
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
      id
      updatedAt
      owner
    }
  }
`;
