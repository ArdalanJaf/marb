import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  icons: [],
  reviews: [
    {
      name: "ardo",
      quote: {
        en: "en quote",
        sp: "sp quote",
        cr: "cr quote",
      },
    },
    {
      name: "maria",
      quote: {
        en: "en quote",
        sp: "sp quote",
        cr: "cr quote",
      },
    },
  ],
};

export const testimonialSlice = createSlice({
  name: "testimonial",
  initialState,
  reducers: {},
});

export const {} = testimonialSlice.actions;

// export const selectQuote = (state) => state.testimonial.quote[state.text.lang];

export default testimonialSlice.reducer;
