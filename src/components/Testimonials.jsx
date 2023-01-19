import React from "react";
import { useSelector } from "react-redux";
import { selectLang } from "../app/generalSlice";
import { selectEditMode } from "../app/adminSlice";
import createMarkup from "../utils/createMarkup";
import TextOnlyEditor from "./TextOnlyEditor";

export default function Testimonials() {
  const { testimonials } = useSelector((state) => state.content.clients);
  const lang = useSelector(selectLang);
  const editMode = useSelector(selectEditMode);

  return (
    <div>
      <h2>testimonials</h2>

      {testimonials.map((t, i) => {
        return (
          <div key={i}>
            <div>
              {!editMode ? (
                <p>{t.name}</p>
              ) : (
                <TextOnlyEditor keys={["clients", "testimonials", i, "name"]} />
              )}
            </div>
            <div>
              {!editMode ? (
                <p>{t[lang]}</p>
              ) : (
                <TextOnlyEditor keys={["clients", "testimonials", i, lang]} />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
