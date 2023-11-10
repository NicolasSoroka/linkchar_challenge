import { createSlice } from "@reduxjs/toolkit";

type Story = {
  
};

type StoriesState = {
  storyList: Story[];
  viewedList: string[];
};

const initialState: StoriesState = {
  storyList: [],
  viewedList: [], 
};


export const storiesSlice = createSlice({
  name: "stories",
  initialState,
  reducers: {
    addStory: (state, action) => {
      // state.list.push(action.payload);
    },
    removeStory: (state, action) => {
      // state.list = state.list.filter((todo) => todo.id !== action.payload);
    },
    viewedStory: (state, action) => {
      // const todo = state.list.find((todo) => todo.id === action.payload);
    },
    fillStoryList: (state, action) => {
      state.storyList = action.payload;
    }
  },
});

export const { addStory, removeStory, viewedStory, fillStoryList } = storiesSlice.actions;
export default storiesSlice.reducer;
