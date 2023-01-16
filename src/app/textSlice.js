import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   lang: "en", // function to check browser language?
//   about: {
//     cr: "<p>Creole creole creole</p>",
//     en: "<p>This is the About data</p>",
//     sp: "<p>Hola me llamo Ardo</p>",
//   },
//   extra: {
//     cr: "<p>CR extra</p>",
//     en: "<p>EN extra</p>",
//     sp: "<p>SP extra</p>",
//   },
// };

const initialState = {
  lang: "en", // function to check browser language?
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
  extra: {
    cr: "<p>CR extra</p>",
    en: "<p>EN extra</p>",
    sp: "<p>SP extra</p>",
  },
};

export const textSlice = createSlice({
  name: "text",
  initialState,
  reducers: {
    setText: (state, action) => {
      const { sectionKey, elKey, value } = action.payload;
      let copy = JSON.parse(JSON.stringify(state));
      // {
      //   ...state,
      //   about: { ...state.about, en: {...en} },
      //   extra: { ...state.extra },
      // };
      // console.log(copy);
      copy[sectionKey][elKey][state.lang] = value;
      console.log(copy);
      return copy;
    },
    setLang: (state, action) => {
      return {
        ...state,
        lang: action.payload,
        about: { ...state.about },
        extra: { ...state.extra },
      };
    },
  },
});

export const { setText, setLang } = textSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`

export const selectText = (state) => state.text;
export const selectLang = (state) => state.text.lang;

export default textSlice.reducer;
