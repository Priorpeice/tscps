import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistStore,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import authSlice from "./slice/authSlice";
import errorSlice from "./slice/errorSlice";
import popupReducer from"./slice/loginPopUp";
const accessTokenPersistConfig = {
  key: "root",
  storage,
};

const persistedAccessTokenReducer = persistReducer(
  accessTokenPersistConfig,
  authSlice
);

export const store = configureStore({
  reducer: {
    accessToken: persistedAccessTokenReducer,
    error: errorSlice, 
    popup: popupReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
