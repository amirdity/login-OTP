
import { configureStore } from "@reduxjs/toolkit";
import darkmodeReducer from "./feature/darkModeSlice";

export const store = configureStore({
  reducer: {
    darkmode: darkmodeReducer,
  },
});
