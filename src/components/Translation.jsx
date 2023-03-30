import React from "react";
import { useSelector } from "react-redux";
import TinyEditor from "./subComponents/TinyEditor";
import TextOnlyEditor from "./subComponents/TextOnlyEditor";
import createMarkup from "../utils/createMarkup";

export default function Translation() {
  const { translation } = useSelector((state) => state.content.texts);
  const { lang, editMode } = useSelector((state) => state.general);

  return (
    <div>
      <h1>
        {!editMode ? (
          translation.title[lang]
        ) : (
          <TextOnlyEditor
            keys={["texts", "translation", "title", lang]}
            id={translation.title.id}
          />
        )}
      </h1>
      {!editMode ? (
        <div
          dangerouslySetInnerHTML={createMarkup(translation.body[lang])}
        ></div>
      ) : (
        <TinyEditor
          keys={["texts", "translation", "body", lang]}
          id={translation.body.id}
        />
      )}
    </div>
  );
}
