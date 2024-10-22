import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ErrorState {
  code: string | null;
  content: string | null;
}

const initialState: ErrorState = {
  code: null,
  content: null,
};

const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    setError(state, action: PayloadAction<{ code: string; content: string }>) {
      state.code = action.payload.code;
      state.content = action.payload.content;
    },
    clearError(state) {
      state.code = null;
      state.content = null;
    },
  },
});

export const { setError, clearError } = errorSlice.actions;
export default errorSlice.reducer;
