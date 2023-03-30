import React from "react";
import { useSelector } from "react-redux";
import TinyEditor from "./subComponents/TinyEditor";
import TextOnlyEditor from "./subComponents/TextOnlyEditor";
import createMarkup from "../utils/createMarkup";

export default function About() {
  const { about } = useSelector((state) => state.content.texts);
  const { lang, editMode } = useSelector((state) => state.general);

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
