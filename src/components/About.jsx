import React from "react";
import { useSelector } from "react-redux";
import { selectText } from "../app/textSlice";
import TinyEditor from "./TinyEditor";
import createMarkup from "../utils/createMarkup";
import { selectLang } from "../app/generalSlice";
import { selectEditMode } from "../app/adminSlice";
import TextOnlyEditor from "./TextOnlyEditor";

export default function About() {
  const { about } = useSelector(selectText);
  const lang = useSelector(selectLang);
  const editMode = useSelector(selectEditMode);

  console.log(about.body[lang]);
  return (
    <div>
      <h1>
        {!editMode ? (
          about.title[lang]
        ) : (
          <TextOnlyEditor sectionKey="about" elKey="title" />
        )}
      </h1>
      {!editMode ? (
        <div dangerouslySetInnerHTML={createMarkup(about.body[lang])}></div>
      ) : (
        <TinyEditor sectionKey="about" elKey="body" />
      )}
    </div>
  );
}
