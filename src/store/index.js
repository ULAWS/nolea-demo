import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import newsReducer from "./features/newsSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    news: newsReducer,
  },
});

export default store;
