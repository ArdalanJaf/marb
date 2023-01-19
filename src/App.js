import React, { useEffect } from "react";
import "./App.css";
import About from "./components/About";
import { useDispatch, useSelector } from "react-redux";
import { setEditMode, selectEditMode } from "./app/adminSlice";
import { setContent } from "./app/contentSlice";
import LangSelect from "./components/LangSelect";
import Testimonials from "./components/Testimonials";
import { API_URL } from "./config/API_URL";
import axios from "axios";

function App() {
  const dispatch = useDispatch();
  const editMode = useSelector(selectEditMode);

  const getText = async () => {
    try {
      const result = await axios.get(API_URL + "/content");
      dispatch(setContent(result.data.content));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getText();
  }, []);

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
