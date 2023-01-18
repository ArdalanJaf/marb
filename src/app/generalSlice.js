import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lang: "en", // function to check browser language?
};

export const generalSlice = createSlice({
  name: "general",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setLang: (state, action) => {
      return {
        ...state,
        lang: action.payload,
      };
    },
  },
});

export const { setLang } = generalSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`

export const selectLang = (state) => state.general.lang;

export default generalSlice.reducer;
