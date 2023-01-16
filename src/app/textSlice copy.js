import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  lang: "en", // function to check browser language?
  en: {
    about: "<p>This is the About data</p>",
    extra: "<p>I'm extra</p>",
  },
  cr: { about: "<p>Creole creole creole</p>", extra: "<p>extra creole</p>" },
  sp: { about: "<p>Hola me llamo Ardo</p>", extra: "<p>Soy mas cosas</p>" },
};

export const textSlice = createSlice({
  name: "text",
  initialState,
  reducers: {
    setText: (state, action) => {
      let copy = {
        ...state,
        en: { ...state.en },
        sp: { ...state.sp },
        cr: { ...state.cr },
      };
      copy[state.lang][action.payload.key] = action.payload.value;
      return copy;
    },
    setLang: (state, action) => {
      // let copy = { ...state, en: { ...state.en }, sp: { ...state.sp } };
      // copy.lang = state.lang === "en" ? "sp" : "en";
      // return copy;
      return {
        ...state,
        lang: action.payload,
        en: { ...state.en },
        sp: { ...state.sp },
        cr: { ...state.cr },
      };
    },
  },
});

export const { setText, setLang } = textSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`

export const selectText = (state) => state.text[state.text.lang];
export const selectLang = (state) => state.text.lang;

export default textSlice.reducer;
