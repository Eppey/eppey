import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface UserState {
  id: string;
  school: string;
  major: string;
  resetEmail: string;
}

const initialState: UserState = {
  id: '',
  school: '',
  major: '',
  resetEmail: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.id = action.payload.id;
      state.school = action.payload.school;
      state.major = action.payload.major;
    },
    setResetEmail: (state, action: PayloadAction<string>) => {
      state.resetEmail = action.payload;
    },
  },
});

export const { setUser, setResetEmail } = userSlice.actions;

export const selectUser = (state: RootState) => state.user;
export const selectId = (state: RootState) => state.user.id;
export const selectSchool = (state: RootState) => state.user.school;
export const selectMajor = (state: RootState) => state.user.major;
export const selectResetEmail = (state: RootState) => state.user.resetEmail;

export default userSlice.reducer;
