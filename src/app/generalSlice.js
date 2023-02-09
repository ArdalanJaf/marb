import { createSlice } from "@reduxjs/toolkit";
import isMobileMode from "../utils/isMobileMode";

const initialState = {
  lang: "en", // function to check browser language?
  screen: 0,
  editMode: false,
  // mobileMode: isMobileMode(),
  mobileMode: isMobileMode(),
  size: window.innerWidth,
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
    setScreen: (state, action) => {
      return {
        ...state,
        screen: action.payload,
      };
    },
    setEditMode: (state) => {
      return { ...state, editMode: !state.editMode };
    },
    setMobileMode: (state) => {
      // console.log(state.mobileMode !== isMobileMode());
      if (state.mobileMode !== isMobileMode())
        return { ...state, mobileMode: !state.mobileMode };
    },
  },
});

export const { setLang, setScreen, setEditMode, setMobileMode } =
  generalSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`

export const selectLang = (state) => state.general.lang;

export default generalSlice.reducer;
