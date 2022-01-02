import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface sessionState {
  postOwnerID: string;
}

const initialState: sessionState = {
  postOwnerID: '',
};

export const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    setPostOwnerID: (state, action: PayloadAction<string>) => {
      state.postOwnerID = action.payload;
    },
  },
});

export const { setPostOwnerID } = sessionSlice.actions;

export const selectPostOwnerID = (state: RootState) =>
  state.session.postOwnerID;

export default sessionSlice.reducer;
