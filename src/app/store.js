import { configureStore } from "@reduxjs/toolkit";
import textReducer from "./textSlice";
import adminReducer from "./adminSlice";

export const store = configureStore({
  reducer: {
    text: textReducer,
    admin: adminReducer,
  },
});
