import React from "react";
import { useSelector } from "react-redux";
import { selectContent } from "../app/textSlice";
import DOMPurify from "dompurify";
import TinyEditor from "./TinyEditor";

import { selectEditMode } from "../app/adminSlice";

export default function About() {
  const { about } = useSelector(selectContent);
  const editMode = useSelector(selectEditMode);

  function createMarkup(html) {
    return {
      __html: DOMPurify.sanitize(html),
    };
  }

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
