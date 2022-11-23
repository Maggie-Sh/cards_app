import { configureStore } from "@reduxjs/toolkit";
import cardsReducer from "./features/cards/cardsSlice";
import showSidebarReducer from "./features/show-sidebar/showSidebarSlice";

export const store = configureStore({
  reducer: {
    cards: cardsReducer,
    showSidebar: showSidebarReducer,
  },
});
