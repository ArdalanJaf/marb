import React from "react";
import "./App.css";
import About from "./components/About";
import { useDispatch, useSelector } from "react-redux";
import { setLang } from "./app/textSlice";
import { setEditMode, selectEditMode } from "./app/adminSlice";

function App() {
  const dispatch = useDispatch();

  const editMode = useSelector(selectEditMode);

  return (
    <div className="App">
      <About />

      <div>
        <button onClick={() => dispatch(setEditMode())}>
          Edit: {editMode ? "on" : "off"}
        </button>

        <button onClick={() => dispatch(setLang())}>language</button>
      </div>
    </div>
  );
}

export default App;
