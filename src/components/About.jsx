import React from "react";
import { useSelector } from "react-redux";
import { selectText } from "../app/textSlice";
import TinyEditor from "./TinyEditor";
import createMarkup from "../utils/createMarkup";
import { selectLang } from "../app/textSlice";
import { selectEditMode } from "../app/adminSlice";

export default function About() {
  const { about } = useSelector(selectText);
  const lang = useSelector(selectLang);
  const editMode = useSelector(selectEditMode);

  return (
    <div>
      <h1>About</h1>
      {!editMode ? (
        <div dangerouslySetInnerHTML={createMarkup(about[lang])}></div>
      ) : (
        <TinyEditor contentKey="about" />
      )}
    </div>
  );
}
