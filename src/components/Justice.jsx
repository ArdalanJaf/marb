import React from "react";
import { useSelector } from "react-redux";
import TinyEditor from "./TinyEditor";
import TextOnlyEditor from "./TextOnlyEditor";
import createMarkup from "../utils/createMarkup";

export default function Justice() {
  const { justice } = useSelector((state) => state.content.texts);
  const { lang, editMode } = useSelector((state) => state.general);

  return (
    <div>
      <h1>
        {!editMode ? (
          justice.title[lang]
        ) : (
          <TextOnlyEditor
            keys={["texts", "justice", "title", lang]}
            id={justice.title.id}
          />
        )}
      </h1>
      {!editMode ? (
        <div dangerouslySetInnerHTML={createMarkup(justice.body[lang])}></div>
      ) : (
        <TinyEditor
          keys={["texts", "justice", "body", lang]}
          id={justice.body.id}
        />
      )}
    </div>
  );
}
