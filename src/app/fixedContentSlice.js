import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nav: {
    page1: { cr: "cr page1", en: "en page1", sp: "sp page1", screen: 1 },
    page2: { cr: "cr page2", en: "en page2", sp: "sp page2", screen: 2 },
    page3: { cr: "cr page3", en: "en page3", sp: "sp page3", screen: 3 },
    page4: { cr: "cr page4", en: "en page4", sp: "sp page4", screen: 4 },
    page5: { cr: "cr page5", en: "en page5", sp: "sp page5", screen: 5 },
  },
};

export const fixedContentSlice = createSlice({
  name: "fixedContent",
  initialState,
  reducers: {},
});

export const {} = fixedContentSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`

export const selectFixedContent = (state) => state.fixedContent.nav;

export default fixedContentSlice.reducer;
