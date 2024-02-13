import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: {
    isSidebar: false,
  },
  reducers: {
    setSideBar: (state, action) => {
      state.isSidebar = action.payload;
    },
  },
});

export const { setSideBar } = sidebarSlice.actions;

export default sidebarSlice.reducer;
