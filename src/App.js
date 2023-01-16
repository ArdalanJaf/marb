import React from "react";
import "./App.css";
import About from "./components/About";
import { useDispatch, useSelector } from "react-redux";
import { setEditMode, selectEditMode } from "./app/adminSlice";
import LangSelect from "./components/LangSelect";
import Testimonials from "./components/Testimonials";

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

        <LangSelect />
      </div>
      <Testimonials />
    </div>
  );
}

export default App;
