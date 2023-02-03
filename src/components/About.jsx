import React from "react";
import { useSelector } from "react-redux";
import TinyEditor from "./TinyEditor";
import createMarkup from "../utils/createMarkup";
import { selectLang } from "../app/generalSlice";
import { selectEditMode } from "../app/adminSlice";
import TextOnlyEditor from "./TextOnlyEditor";

export default function About() {
  const { about } = useSelector((state) => state.content.texts);
  const lang = useSelector(selectLang);
  const editMode = useSelector(selectEditMode);

  return (
    <div>
      <h1>
        {!editMode ? (
          about.title[lang]
        ) : (
          <TextOnlyEditor
            keys={["texts", "about", "title", lang]}
            id={about.title.id}
          />
        )}
      </h1>
      {!editMode ? (
        <div dangerouslySetInnerHTML={createMarkup(about.body[lang])}></div>
      ) : (
        <TinyEditor
          keys={["texts", "about", "body", lang]}
          id={about.body.id}
        />
      )}
    </div>
  );
}
