import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { useSelector, useDispatch } from "react-redux";
import { selectText, setText } from "../app/textSlice";
import { selectLang } from "../app/generalSlice";

export default function TextOnlyEditor({ sectionKey, elKey }) {
  const dispatch = useDispatch();
  const lang = useSelector(selectLang);
  const content = useSelector((state) => state.text[sectionKey][elKey][lang]);
  const editorRef = useRef(null);

  function htmlTagStripper(str) {
    return str.replaceAll(/<[^<>]+>/g, "");
  }

  const handleChange = () => {
    dispatch(
      setText({
        sectionKey,
        elKey,
        lang,
        value: htmlTagStripper(editorRef.current.getContent()),
      })
    );
  };

  return (
    <>
      <Editor
        tinymceScriptSrc={process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"}
        onInit={(evt, editor) => (editorRef.current = editor)}
        value={content}
        onEditorChange={handleChange}
        inline={true}
        init={{
          browser_spellcheck: true,
          contextmenu: false,
          noneditable_editable_class: "editable", // class allowed to edit
          noneditable_noneditable_class: "non_editable", // the parent (everything else)
          height: 500,
          menubar: false,
          plugins: ["noneditable"],
          toolbar: "undo redo ",
        }}
      />
    </>
  );
}
