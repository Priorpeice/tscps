import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';
import axios from 'axios';

export type AccessTokenProps = {
    accessToken: string | null;
  };
  
  const initialState: AccessTokenProps = {
    accessToken: null,
  };

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<AccessTokenProps>) => {
      const { accessToken } = action.payload;
      state.accessToken = accessToken;
    }
  }
})

// 액션과 리듀서 export
export const { setCredentials } = authSlice.actions;
export default authSlice.reducer;
