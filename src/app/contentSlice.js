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
  clientLogos: [], // {id, type?, link/svg, name, hide?}
  reviews: [], // {id, name, en, sp, cr, hide?}
  sortOrders: { reviews: {}, clientLogos: {} }, // reviews, clientLogos
  editedTracker: { texts: [], reviews: [], clientLogos: [], sortOrders: [] },
};

export const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {
    setAllContent: (state, action) => {
      action.payload.editedTracker = initialState.editedTracker;
      return action.payload;
    },
    applySortOrders: (state) => {
      let copy = JSON.parse(JSON.stringify(state));
      Object.keys(copy.sortOrders).forEach((k) => {
        let sortArr = copy.sortOrders[k].sortOrder;
        if (Object.keys(copy[k]).length > 0) {
          copy[k].sort((a, b) => {
            return sortArr.indexOf(a.id) < sortArr.indexOf(b.id)
              ? -1
              : sortArr.indexOf(a.id) > sortArr.indexOf(b.id)
              ? 1
              : 0;
          });
        }
      });
      return copy;
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
    setOrder: (state, action) => {
      // change array order
      const { key, i, direction } = action.payload;
      let copy = JSON.parse(JSON.stringify(state));
      let { sortOrder } = copy.sortOrders[key];
      let iDiff = i + (direction ? -1 : 1); //true = move up, false = move down
      sortOrder.splice(iDiff, 0, sortOrder.splice(i, 1)[0]);
      return copy;
    },
    addReview: (state, action) => {
      // add new review (add straight to DB)
      // also add to sortOrder (new function?)
    },
    delReview: (state, action) => {
      // del review from DB
    },
  },
});

export const {
  setAllContent,
  setText,
  trackEdit,
  resetEditTracker,
  setOrder,
  applySortOrders,
} = contentSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`

export const selectContent = (state) => state.content;

export default contentSlice.reducer;
