import React from "react";
import { useSelector } from "react-redux";
import TinyEditor from "./TinyEditor";
import TextOnlyEditor from "./TextOnlyEditor";
import createMarkup from "../utils/createMarkup";

export default function Clients() {
  const { clients } = useSelector((state) => state.content.texts);
  const { lang, editMode } = useSelector((state) => state.general);

  return (
    <div>
      <h1>
        {!editMode ? (
          clients.title[lang]
        ) : (
          <TextOnlyEditor
            keys={["texts", "clients", "title", lang]}
            id={clients.title.id}
          />
        )}
      </h1>
      {!editMode ? (
        <div dangerouslySetInnerHTML={createMarkup(clients.body[lang])}></div>
      ) : (
        <TinyEditor
          keys={["texts", "clients", "body", lang]}
          id={clients.body.id}
        />
      )}
    </div>
  );
}
