import { configureStore } from '@reduxjs/toolkit';
import ProfileReducer from "./ProfileSlice";

const store = configureStore({
    reducer: {
      profile: ProfileReducer
    }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;