import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "./features/slices/sidebarSlice";
import userSlice from "./features/slices/user/userSlice";

const store = configureStore({
  reducer: {
    sidebar: sidebarSlice,
    userSlice:userSlice
  },
});

export default store;
