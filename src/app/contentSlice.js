import { createSlice } from "@reduxjs/toolkit";
import { navObjWithKeys } from "../utils/navObjWithKeys";

const initialState = {
  texts: {
    about: {
      title: {
        cr: "",
        en: "",
        sp: "",
      },
      body: {
        cr: "<p>Creole creole creole</p>",
        en: "<p>This is the About data</p>",
        sp: "<p>Hola me llamo Ardo</p>",
        id: 1,
      },
    },
  },
  clientLogos: [], //type, link/svg,
  reviews: [],
  editedTracker: { texts: [], reviews: [], clientLogos: [] },
};

export const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {
    setAllContent: (state, action) => {
      action.payload.editedTracker = initialState.editedTracker;
      return action.payload;
    },
    setText: (state, action) => {
      const { keys, value } = action.payload;

      // check if value has changed
      if (value !== navObjWithKeys(state, keys)) {
        let copy = JSON.parse(JSON.stringify(state));
        navObjWithKeys(copy, keys, value); // changes value in copy
        return copy;
      }
    },
    trackEdit: (state, action) => {
      const { id, keys, value } = action.payload;

      // check if value has changed and if edit is already tracked
      if (
        value !== navObjWithKeys(state, keys) &&
        !state.editedTracker[keys[0]].includes(id)
      ) {
        let copy = JSON.parse(JSON.stringify(state));
        copy.editedTracker[keys[0]].push(id);
        return copy;
      }
    },
    resetEditTracker: (state) => {
      let copy = JSON.parse(JSON.stringify(state));
      copy.editedTracker = initialState.editedTracker;
      return copy;
    },
  },
});

export const { setAllContent, setText, trackEdit, resetEditTracker } =
  contentSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`

export const selectContent = (state) => state.content;

export default contentSlice.reducer;
