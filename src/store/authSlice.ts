import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';
import axios from 'axios';

export type accessToken = {
    accessToken: string | null;
  };
  
  const initialState: accessToken = {
    accessToken: null,
  };

export const authSlice = createSlice({
  name: 'accessToken',
  initialState,
  reducers: {
    setAccessToken: (state, action: PayloadAction<string | null>) => {
      state.accessToken = action.payload;
    //   axios.defaults.headers.common['Authorization'] = `Bearer ${action.payload}`;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, (state) => {
      return initialState;
    });
}
});

// 액션과 리듀서 export
export const { setAccessToken } = authSlice.actions;
export default authSlice.reducer;
