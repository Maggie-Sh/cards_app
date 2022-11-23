import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

export const showSidebarSlice = createSlice({
  name: "showSidebar",
  initialState,
  reducers: {
    show: () => {
      return true;
    },
    hide: () => {
      return false;
    },
  },
});

export const { show, hide } = showSidebarSlice.actions;

export default showSidebarSlice.reducer;
