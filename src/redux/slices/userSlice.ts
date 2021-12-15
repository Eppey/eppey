import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface UserState {
  id: number;
  nickname: string;
  email: string;
  school: string;
  major: string;
  posts: number;
  comments: number;
  points: number;
}

const initialState: UserState = {
  id: 0,
  nickname: '',
  email: '',
  school: '',
  major: '',
  posts: 0,
  comments: 0,
  points: 0,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.id = action.payload.id;
      state.nickname = action.payload.nickname;
      state.email = action.payload.email;
      state.school = action.payload.school;
      state.major = action.payload.major;
      state.posts = action.payload.posts;
      state.comments = action.payload.comments;
      state.points = action.payload.points;
    },
    changeNickname: (state, action) => {
      state.nickname = action.payload;
    },
    incrementPosts: (state) => {
      state.posts += 1;
    },
    decrementPosts: (state) => {
      state.posts -= 1;
    },
    incrementComments: (state) => {
      state.comments += 1;
    },
    decrementComments: (state) => {
      state.comments -= 1;
    },
    changePoints: (state, action: PayloadAction<number>) => {
      state.points += action.payload;
    },
  },
});

export const {
  setUser,
  changeNickname,
  incrementPosts,
  decrementPosts,
  incrementComments,
  decrementComments,
  changePoints,
} = userSlice.actions;

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
