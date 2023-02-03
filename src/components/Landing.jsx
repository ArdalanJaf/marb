import React from "react";
import { useSelector } from "react-redux";
import TinyEditor from "./TinyEditor";
import TextOnlyEditor from "./TextOnlyEditor";
import createMarkup from "../utils/createMarkup";

export default function Landing() {
  const { landing } = useSelector((state) => state.content.texts);
  const { lang, editMode } = useSelector((state) => state.general);

  return (
    <div>
      <h1>
        {!editMode ? (
          landing.title[lang]
        ) : (
          <TextOnlyEditor
            keys={["texts", "landing", "title", lang]}
            id={landing.title.id}
          />
        )}
      </h1>
      {/* {!editMode ? (
        <div dangerouslySetInnerHTML={createMarkup(landing.body[lang])}></div>
      ) : (
        <TinyEditor
          keys={["texts", "landing", "body", lang]}
          id={landing.body.id}
        />
      )} */}
    </div>
  );
}
