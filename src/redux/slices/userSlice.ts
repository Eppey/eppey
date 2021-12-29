import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface UserState {
  userID: string;
  userNickname: string;
  school: string;
  major: string;
  resetEmail: string;
}

const initialState: UserState = {
  userID: '',
  userNickname: '',
  school: '',
  major: '',
  resetEmail: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.userID = action.payload.userID;
      state.userNickname = action.payload.userNickname;
      state.school = action.payload.school;
      state.major = action.payload.major;
    },
    setUserNickname: (state, action: PayloadAction<string>) => {
      state.userNickname = action.payload;
    },
    setResetEmail: (state, action: PayloadAction<string>) => {
      state.resetEmail = action.payload;
    },
  },
});

export const { setUser, setResetEmail } = userSlice.actions;

export const selectUserID = (state: RootState) => state.user.userID;
export const selectUserNickname = (state: RootState) => state.user.userNickname;
export const selectSchool = (state: RootState) => state.user.school;
export const selectMajor = (state: RootState) => state.user.major;
export const selectResetEmail = (state: RootState) => state.user.resetEmail;

export default userSlice.reducer;
