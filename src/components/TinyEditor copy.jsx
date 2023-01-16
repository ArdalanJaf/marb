import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { useSelector, useDispatch } from "react-redux";
import { selectText, setText } from "../app/textSlice";

export default function TinyEditor({ contentKey }) {
  const dispatch = useDispatch();
  const content = useSelector(selectText);
  const editorRef = useRef(null);

  const handleChange = () => {
    dispatch(
      setText({ key: contentKey, value: editorRef.current.getContent() })
    );
  };

  return (
    <>
      <Editor
        tinymceScriptSrc={process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"}
        onInit={(evt, editor) => (editorRef.current = editor)}
        value={content[contentKey]}
        onEditorChange={handleChange}
        inline={true}
        init={{
          browser_spellcheck: true,
          contextmenu: false,
          height: 500,
          menubar: false,
          plugins: [
            "advlist",
            "autolink",
            "lists",
            "link",
            "image",
            "charmap",
            "anchor",
            "searchreplace",
            "visualblocks",
            "code",
            "fullscreen",
            "insertdatetime",
            "media",
            "table",
            "preview",
            "help",
            "wordcount",
          ],
          toolbar:
            "undo redo | blocks language | " +
            "bold italic forecolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help fontsize",
          // content_langs: [
          //   { title: "English", code: "en" },
          //   { title: "Spanish", code: "es" },
          // ],
          // content_style:
          //   "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />
    </>
  );
}
