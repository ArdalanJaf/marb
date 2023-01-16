import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLang } from "../app/textSlice";

export default function LangSelect() {
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.text.lang);

  return (
    <select onChange={(e) => dispatch(setLang(e.target.value))} value={lang}>
      <option value="cr">Creole</option>
      <option value="sp">Spanish</option>
      <option value="en">English</option>
    </select>
  );
}
