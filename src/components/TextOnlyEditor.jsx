import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { useSelector, useDispatch } from "react-redux";
import { selectText, setText } from "../app/textSlice";
import { selectLang } from "../app/textSlice";

export default function TextOnlyEditor({ sectionKey, elKey }) {
  const dispatch = useDispatch();
  // const contents = useSelector((selectText));
  const lang = useSelector(selectLang);
  // const content = contents[contentKey][lang];
  const content = useSelector((state) => state.text[sectionKey][elKey][lang]);
  console.log(content);
  const editorRef = useRef(null);

  function htmlTagStripper(str) {
    return str.replaceAll(/<[^<>]+>/g, "");
  }

  const handleChange = () => {
    // console.log(editorRef.current.getContent());
    dispatch(
      setText({
        sectionKey,
        elKey,
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