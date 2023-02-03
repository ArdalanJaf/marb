import React from "react";
import { useSelector } from "react-redux";
import { selectLang } from "../app/generalSlice";
import { selectEditMode } from "../app/adminSlice";
import TextOnlyEditor from "./TextOnlyEditor";
import { useState } from "react";

export default function Reviews() {
  const { reviews } = useSelector((state) => state.content);
  const lang = useSelector(selectLang);
  const editMode = useSelector(selectEditMode);

  return (
    <div>
      <h2>Reviews</h2>

      {reviews.map((t, i) => {
        return (
          <div key={i}>
            <div>
              {!editMode ? (
                <p>{t.name}</p>
              ) : (
                <TextOnlyEditor keys={["reviews", i, "name"]} id={t.id} />
              )}

              {!editMode ? (
                <p>{t[lang]}</p>
              ) : (
                <TextOnlyEditor keys={["reviews", i, lang]} id={t.id} />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
