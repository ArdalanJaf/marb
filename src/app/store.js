import { configureStore } from "@reduxjs/toolkit";
import textReducer from "./textSlice";
import adminReducer from "./adminSlice";
import testimonialReducer from "./testimonialSlice";
import generalReducer from "./generalSlice";

export const store = configureStore({
  reducer: {
    text: textReducer,
    admin: adminReducer,
    testimonial: testimonialReducer,
    general: generalReducer,
  },
});
