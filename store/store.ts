import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import commentReducer from "./features/commentSlice";
import postReducer from "./features/postSlice";
import profileReducer from "./features/profileSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    comment: commentReducer,
    post: postReducer,
    profile: profileReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
