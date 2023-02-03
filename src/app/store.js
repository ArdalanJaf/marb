import { configureStore } from "@reduxjs/toolkit";
import contentReducer from "./contentSlice";
import adminReducer from "./adminSlice";
import generalReducer from "./generalSlice";
import fixedContentReducer from "./fixedContentSlice";

export const store = configureStore({
  reducer: {
    content: contentReducer,
    admin: adminReducer,
    general: generalReducer,
    fixedContent: fixedContentReducer,
  },
});
