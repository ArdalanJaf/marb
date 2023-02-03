import React, { useEffect } from "react";
import "./App.css";
import About from "./components/About";
import { useDispatch, useSelector } from "react-redux";
import { setEditMode, selectEditMode } from "./app/adminSlice";
import { setAllContent } from "./app/contentSlice";
import LangSelect from "./components/LangSelect";
import Reviews from "./components/Reviews";
import { API_URL } from "./config/API_URL";
import axios from "axios";
import SaveBtn from "./components/SaveBtn";

function App() {
  const dispatch = useDispatch();
  const editMode = useSelector(selectEditMode);

  const getAllContent = async () => {
    try {
      const result = await axios.get(API_URL + "/content");
      dispatch(setAllContent(result.data.content));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllContent();
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
      <Reviews />
      <SaveBtn />
    </div>
  );
}

export default App;
