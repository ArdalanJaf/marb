import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  editMode: true,
  token: "",
};

export const adminSlice = createSlice({
  name: "admin",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setEditMode: (state) => {
      return { ...state, editMode: !state.editMode };
    },
  },
});

export const { setEditMode } = adminSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`

export const selectEditMode = (state) => state.admin.editMode;

export default adminSlice.reducer;
