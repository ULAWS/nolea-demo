import { createSlice } from "@reduxjs/toolkit";
import { news } from "../../news/items";

const initialState = {
  items: news,
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setNews: (state, action) => {
      state.items = action.payload.news;
    },
    addNews: (state, action) => {
      state.items.push(action.payload);
    },
    editNews: (state, action) => {
      console.log(action.payload);
      state.items[action.payload.index] = action.payload.item;
    },
  },
});

export const { setNews, addNews, editNews } = newsSlice.actions;
export default newsSlice.reducer;
