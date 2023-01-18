import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  // lang: "en", // function to check browser language?
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
    setAllText: (state, action) => {
      return action.payload;
    },
    setText: (state, action) => {
      const { sectionKey, elKey, lang, value } = action.payload;
      let copy = JSON.parse(JSON.stringify(state));
      copy[sectionKey][elKey][lang] = value;
      console.log(copy);
      return copy;
    },
  },
});

export const { setText, setAllText } = textSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`

export const selectText = (state) => state.text;
// export const selectLang = (state) => state.general.lang;

export default textSlice.reducer;
