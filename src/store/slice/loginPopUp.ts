import { createSlice } from '@reduxjs/toolkit';

interface PopupState {
  isPopupOpen: boolean;
}

const initialState: PopupState = {
  isPopupOpen: false,
};

export const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    openPopup: (state) => {
      state.isPopupOpen = true;
    },
    closePopup: (state) => {
      state.isPopupOpen = false;
    },
  },
});

export const { openPopup, closePopup } = popupSlice.actions;

export default popupSlice.reducer;
