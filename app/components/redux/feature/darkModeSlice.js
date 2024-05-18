import { createSlice } from "@reduxjs/toolkit";
export const darkModeSlice = createSlice({
  name: "darkmode",
  initialState: { value: { isDarkMode: false } },
  reducers: {
    darkmode: (state, action) => {
      state.value = action.payload;
    },
  },
});
export default darkModeSlice.reducer;
export const { darkmode } = darkModeSlice.actions;
