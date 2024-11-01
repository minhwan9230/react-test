import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, name: "First post", content: "111" },
  { id: 2, name: "Second Post", content: "222" },
];

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action) => {
      const { title, content } = action.payload;
      state.push({ id: state.length + 1, name: title, content });
    },
    deletePost: (state, action) => {
      return state.filter((post) => post.id !== action.payload);
    },
    editPost: (state, action) => {
      const { id, title, content } = action.payload;
      const post = state.find((post) => post.id === id);
      if (post) {
        post.name = title;
        post.content = content;
      }
    },
  },
});

export const { addPost, deletePost, editPost } = postSlice.actions;
export default postSlice.reducer;
