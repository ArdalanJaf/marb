import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { useSelector, useDispatch } from "react-redux";
import { setText } from "../app/contentSlice";
import { navObjWithKeys } from "../utils/navObjWithKeys";
import htmlTagStripper from "../utils/htmlTagStripper";
import { trackEdit } from "../app/contentSlice";

export default function TextOnlyEditor({ keys, id }) {
  const dispatch = useDispatch();
  const content = useSelector((state) => state.content);
  const editorRef = useRef(null);
  const value = navObjWithKeys(content, keys);

  const handleChange = () => {
    dispatch(
      setText({
        keys,
        value: htmlTagStripper(editorRef.current.getContent()),
      })
    );
    dispatch(trackEdit({ id, keys, value }));
  };

  return (
    <>
      <Editor
        tinymceScriptSrc={process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"}
        onInit={(evt, editor) => (editorRef.current = editor)}
        value={value}
        onEditorChange={() => handleChange()}
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
