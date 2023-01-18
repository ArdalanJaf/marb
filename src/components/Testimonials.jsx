import React from "react";
import { useSelector } from "react-redux";
import { selectLang } from "../app/generalSlice";

import createMarkup from "../utils/createMarkup";
import TinyEditor from "./TinyEditor";

export default function Testimonials() {
  const reviews = useSelector((state) => state.testimonial.reviews);
  const lang = useSelector(selectLang);

  return (
    <div>
      <h1>Testimonials</h1>
      {reviews.map((review, i) => {
        return (
          <div key={i}>
            <p>Name: {review.name}</p>
            <p>Quote: {review.quote[lang]}</p>
          </div>
        );
      })}
    </div>
  );
}
