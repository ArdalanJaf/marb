import React from "react";
import { useSelector } from "react-redux";
import { selectText } from "../app/textSlice";
import TinyEditor from "./TinyEditor";
import createMarkup from "../utils/createMarkup";

import { selectEditMode } from "../app/adminSlice";

export default function About() {
  const { about } = useSelector(selectText);
  const editMode = useSelector(selectEditMode);

  return (
    <div>
      <h1>About</h1>
      {!editMode ? (
        <div dangerouslySetInnerHTML={createMarkup(about)}></div>
      ) : (
        <TinyEditor contentKey="about" />
      )}
    </div>
  );
}
