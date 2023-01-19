import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { keysToObjTool } from "../utils/keysToObjTool";

const initialState = {
  about: {
    title: {
      cr: "AboutCR",
      en: "AboutEN",
      sp: "AboutSP",
    },
    body: {
      cr: "<p>Creole creole creole</p>",
      en: "<p>This is the About data</p>",
      sp: "<p>Hola me llamo Ardo</p>",
    },
  },
  clients: { testimonials: [] },
};

export const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {
    setContent: (state, action) => {
      return action.payload;
    },
    setText: (state, action) => {
      const { keys, value } = action.payload;
      let copy = JSON.parse(JSON.stringify(state));
      keysToObjTool(copy, keys, value);
      return copy;
    },
  },
});

export const { setContent, setText } = contentSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`

export const selectContent = (state) => state.content;
// export const selectLang = (state) => state.general.lang;

export default contentSlice.reducer;
