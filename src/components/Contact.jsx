import React from "react";
import { useSelector } from "react-redux";
import TinyEditor from "./subComponents/TinyEditor";
import TextOnlyEditor from "./subComponents/TextOnlyEditor";
import createMarkup from "../utils/createMarkup";

export default function Contact() {
  const { contact } = useSelector((state) => state.content.texts);
  const { lang, editMode } = useSelector((state) => state.general);

  return (
    <div>
      <h1>
        {!editMode ? (
          contact.title[lang]
        ) : (
          <TextOnlyEditor
            keys={["texts", "contact", "title", lang]}
            id={contact.title.id}
          />
        )}
      </h1>
      {!editMode ? (
        <div dangerouslySetInnerHTML={createMarkup(contact.body[lang])}></div>
      ) : (
        <TinyEditor
          keys={["texts", "contact", "body", lang]}
          id={contact.body.id}
        />
      )}
    </div>
  );
}
