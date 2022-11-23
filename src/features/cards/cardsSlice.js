import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    addItem: (state, action) => {
      console.log(action, "action", [...state, action.payload]);
      return [...state, action.payload];
    },
    deleteItem: (state, action) => {
      return state.filter((item) => item !== action.payload);
    },
    sortItems: (state) => {
      return state.sort((x, y) => x - y);
    },
    clearItems: () => {
      return [];
    },
  },
});

export const { addItem, deleteItem, sortItems, clearItems } =
  cardsSlice.actions;

export default cardsSlice.reducer;
