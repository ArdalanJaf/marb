import { configureStore } from "@reduxjs/toolkit";
import contentReducer from "./contentSlice";
import adminReducer from "./adminSlice";
import generalReducer from "./generalSlice";

export const store = configureStore({
  reducer: {
    content: contentReducer,
    admin: adminReducer,
    general: generalReducer,
  },
});
