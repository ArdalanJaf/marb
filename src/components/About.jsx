import React from "react";
import { useSelector } from "react-redux";
import { selectContent } from "../app/contentSlice";
import TinyEditor from "./TinyEditor";
import createMarkup from "../utils/createMarkup";
import { selectLang } from "../app/generalSlice";
import { selectEditMode } from "../app/adminSlice";
import TextOnlyEditor from "./TextOnlyEditor";

export default function About() {
  const { about } = useSelector(selectContent);
  const lang = useSelector(selectLang);
  const editMode = useSelector(selectEditMode);

  return (
    <div>
      <h1>
        {!editMode ? (
          about.title[lang]
        ) : (
          <TextOnlyEditor keys={["about", "title", lang]} />
        )}
      </h1>
      {!editMode ? (
        <div dangerouslySetInnerHTML={createMarkup(about.body[lang])}></div>
      ) : (
        <TinyEditor keys={["about", "body", lang]} />
      )}
    </div>
  );
}
