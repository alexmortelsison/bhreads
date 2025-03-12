import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Comment {
  id: string;
  user: string;
  content: string;
}

interface CommentState {
  comments: Comment[];
}

const initialState: CommentState = {
  comments: [],
};

const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    setComments: (state, action: PayloadAction<Comment[]>) => {
      state.comments = action.payload;
    },
    addComment: (state, action: PayloadAction<Comment>) => {
      state.comments.push(action.payload);
    },
    removeComment: (state, action: PayloadAction<string>) => {
      state.comments = state.comments.filter(
        (comment) => comment.id !== action.payload
      );
    },
    editComment: (
      state,
      action: PayloadAction<{ id: string; content: string }>
    ) => {
      const comment = state.comments.find((c) => c.id === action.payload.id);
      if (comment) {
        comment.content = action.payload.content;
      }
    },
  },
});

export const { setComments, addComment, removeComment } = commentSlice.actions;
export default commentSlice.reducer;
