import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {
  ModalTitle,
  ModalContent,
  BottomModal,
  // @ts-ignore
} from 'react-native-modals';

import { API } from 'aws-amplify';
import {
  Post,
  GetPostQuery,
  GetPostQueryVariables,
  Bookmark,
  GetUserBookmarkQuery,
  GetUserBookmarkQueryVariables,
} from '../../API';
import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setPostOwnerID } from '../../redux/slices/sessionSlice';
import { selectUserID, selectUserNickname } from '../../redux/slices/userSlice';

import PostContent from '../../components/PostContent';
import CommentContainer from '../../components/CommentContainer';

import { fonts } from '../../styles/fonts';

const PostDetail = ({ route }: any) => {
  const navigation: any = useNavigation();
  const { postID } = route.params;

  const [post, setPost] = useState({} as Post);
  const [bookmarked, setBookmarked] = useState(false);
  const [commentContent, setCommentContent] = useState('');
  const [editingComment, setEditingComment] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const dispatch = useDispatch();
  const userID = useSelector(selectUserID);
  const userNickname = useSelector(selectUserNickname);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: '',
      headerTintColor: '#FFFFFF',
      headerRight: () => postDetailMenus(),
      headerStyle: {
        backgroundColor: '#272F40',
      },
    });
  });

  useEffect(() => {
    const checkBookmarks = async () => {
      const bookmarks = (
        await (API.graphql({
          query: queries.getUserBookmark,
          variables: { userID: userID } as GetUserBookmarkQueryVariables,
        }) as Promise<{ data: GetUserBookmarkQuery }>)
      ).data.getUserBookmark?.items;
      if (bookmarks !== undefined) {
        const idx = bookmarks.findIndex(
          (bookmark) => bookmark!.postID === postID
        );
        if (idx != -1) {
          setBookmarked(true);
        }
      }
    };
    getPostDetail();
    checkBookmarks();
  }, []);

  useEffect(() => {
    const editFinished = navigation.addListener('focus', () => {
      getPostDetail();
    });
    return editFinished;
  }, [navigation]);

  const getPostDetail = async () => {
    setRefreshing(true);
    const postRes = await (API.graphql({
      query: queries.getPost,
      variables: { id: postID } as GetPostQueryVariables,
    }) as Promise<{ data: GetPostQuery }>);
    setPost(postRes.data.getPost as Post);
    dispatch(setPostOwnerID(post.userID));
    setRefreshing(false);
  };

  const updateComment = async () => {
    if (commentContent.length == 0) {
      Alert.alert('Error', "Comment can't be empty!");
      return;
    }

    let params: { [key: string]: string | undefined } = {
      postID: postID,
      userID: userID,
      userNickname: userNickname,
      content: commentContent,
      likes: '0',
    };
    await API.graphql({
      query: mutations.createComment,
      variables: { input: params },
    });
    Keyboard.dismiss();
    setCommentContent('');
    setEditingComment(false);
    getPostDetail();
  };

  const deletePost = async () => {
    await API.graphql({
      query: mutations.deletePost,
      variables: { input: { id: postID } },
    });
    navigation.navigate('Main');
  };

  const addToBookmark = async () => {
    const bookmarks = (
      await (API.graphql({
        query: queries.getUserBookmark,
        variables: { userID: userID } as GetUserBookmarkQueryVariables,
      }) as Promise<{ data: GetUserBookmarkQuery }>)
    ).data.getUserBookmark?.items;

    if (bookmarks !== undefined) {
      const idx = bookmarks.findIndex(
        (bookmark) => bookmark!.postID === postID
      );
      if (idx != -1) {
        await API.graphql({
          query: mutations.deleteBookmark,
          variables: {
            input: { id: bookmarks[idx]!.id },
          },
        });
        setBookmarked(false);
        return;
      }
    }
    await API.graphql({
      query: mutations.createBookmark,
      variables: { input: { postID: postID, userID: userID } },
    });
    setBookmarked(true);
  };

  const postDetailMenus = () => (
    <View style={styles.detailMenus}>
      <Pressable
        style={styles.detailMenuItem}
        onPress={() => console.log('hi')}
      >
        <Image
          style={styles.postIcon}
          source={require('../../../assets/icons/notification.png')}
        />
      </Pressable>
      <Pressable style={styles.detailMenuItem} onPress={() => addToBookmark()}>
        <Image
          style={styles.postIcon}
          source={
            bookmarked
              ? require('../../../assets/icons/bookmark_on.png')
              : require('../../../assets/icons/bookmark_off.png')
          }
        />
      </Pressable>
      {post.userID === userID ? (
        <Pressable
          style={styles.detailMenuItem}
          onPress={() => setShowModal(true)}
        >
          <Image
            style={styles.postIcon}
            source={require('../../../assets/icons/more.png')}
          />
        </Pressable>
      ) : (
        <View></View>
      )}
    </View>
  );

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" />
        <View style={{ flex: 1 }}>
          {Object.keys(post).length === 0 ? (
            <ActivityIndicator size="large" color="#272F40" />
          ) : (
            <ScrollView
              refreshControl={
                <RefreshControl
                  refreshing={refreshing}
                  onRefresh={() => getPostDetail()}
                />
              }
            >
              <PostContent post={post} />
              <CommentContainer
                commentData={post.comments?.items}
                updatePostDetail={getPostDetail}
              />
            </ScrollView>
          )}
        </View>
        <View style={styles.divider} />
        {editingComment ? (
          <View>
            <Pressable
              style={styles.closeButton}
              onPress={() => {
                setCommentContent('');
                setEditingComment(false);
                Keyboard.dismiss();
              }}
            >
              <Image
                style={styles.icon}
                source={require('../../../assets/icons/close.png')}
              />
            </Pressable>
            <TextInput
              style={styles.commentField}
              autoFocus={true}
              placeholder="Add a comment"
              placeholderTextColor="#272F40B2"
              multiline={true}
              value={commentContent}
              onChangeText={(value) => {
                setCommentContent(value);
              }}
              onBlur={() => setEditingComment(false)}
            />
            <View style={styles.divider} />
            <Pressable
              onPress={() => {
                updateComment();
              }}
              style={styles.postButton}
            >
              <Text style={styles.postText}>Post</Text>
            </Pressable>
          </View>
        ) : (
          <Pressable
            style={{ height: 40, paddingStart: '5%', justifyContent: 'center' }}
            onPress={() => setEditingComment(true)}
          >
            <Text style={fonts.body1Light}>Add a comment</Text>
          </Pressable>
        )}
        <BottomModal
          visible={showModal}
          onTouchOutside={() => setShowModal(false)}
          onSwipeOut={() => setShowModal(false)}
          height={170}
          width={1}
          modalTitle={
            <ModalTitle
              title="Options"
              hasTitleBar
              style={{ backgroundColor: '#272F40' }}
              textStyle={{ color: '#FFFFFF' }}
            />
          }
        >
          <ModalContent>
            <Pressable
              style={styles.modalButton}
              onPress={() => {
                navigation.navigate('Write', { postData: post });
                setShowModal(false);
              }}
            >
              <Text>Edit post</Text>
            </Pressable>
            <View style={styles.divider} />
            <Pressable
              style={styles.modalButton}
              onPress={() =>
                Alert.alert(
                  'Alert',
                  'Do you really want to delete your post?',
                  [
                    {
                      text: 'Cancel',
                      onPress: () => setShowModal(false),
                      style: 'cancel',
                    },
                    {
                      text: 'Yes',
                      onPress: () => {
                        deletePost();
                        setShowModal(false);
                      },
                      style: 'default',
                    },
                  ]
                )
              }
            >
              <Text>Delete post</Text>
            </Pressable>
          </ModalContent>
        </BottomModal>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  commentField: {
    ...fonts.body1Black,
    ...{
      fontWeight: 'normal',
      paddingStart: '5%',
      paddingVertical: 15,
      marginVertical: 10,
      height: 80,
    },
  },
  divider: {
    borderBottomColor: '#272F4026',
    borderBottomWidth: 1,
    marginHorizontal: '-100%',
  },
  postButton: {
    height: 40,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  postText: {
    ...fonts.body1,
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  closeButton: {
    height: 40,
    justifyContent: 'center',
    paddingStart: 5,
  },
  postIcon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    marginLeft: 5,
  },
  detailMenus: {
    flexDirection: 'row',
  },
  detailMenuItem: {
    paddingHorizontal: 5,
  },
  modalButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: '100%',
  },
});

export default PostDetail;
