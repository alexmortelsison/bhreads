import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Post {
  id: string;
  user: string;
  content: string;
  image?: string;
  likes: number;
  likedBy: string[];
}

interface PostState {
  posts: Post[];
}

const initialState: PostState = {
  posts: [],
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setPosts: (state, action: PayloadAction<Post[]>) => {
      state.posts = action.payload;
    },
    addPost: (state, action: PayloadAction<Post>) => {
      state.posts.push(action.payload);
    },
    deletePost: (state, action: PayloadAction<string>) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
    likePost: (
      state,
      action: PayloadAction<{ postId: string; userId: string }>
    ) => {
      const post = state.posts.find((p) => p.id === action.payload.postId);
      if (post) {
        if (post.likedBy.includes(action.payload.userId)) {
          post.likedBy = post.likedBy.filter(
            (id) => id !== action.payload.userId
          );
          post.likes -= 1;
        } else {
          post.likedBy.push(action.payload.userId);
          post.likes += 1;
        }
      }
    },
  },
});

export const { setPosts, addPost, deletePost, likePost } = postSlice.actions;
export default postSlice.reducer;
