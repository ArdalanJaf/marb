import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEditMode } from "./app/adminSlice";
import { setAllContent } from "./app/contentSlice";
import LangSelect from "./components/LangSelect";
import SaveBtn from "./components/SaveBtn";
import Nav from "./components/Nav";
import Landing from "./components/Landing";
import Translation from "./components/Translation";
import Justice from "./components/Justice";
import Clients from "./components/Clients";
import About from "./components/About";
import Contact from "./components/Contact";
import Reviews from "./components/Reviews";
import { API_URL } from "./config/API_URL";
import axios from "axios";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const { screen, editMode } = useSelector((state) => state.general);
  const [contentLoaded, setContentLoaded] = useState(false);

  const getAllContent = async () => {
    try {
      const result = await axios.get(API_URL + "/content");
      dispatch(setAllContent(result.data.content));
      setContentLoaded(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllContent();
  }, []);

  return (
    <div className="App">
      <div>
        <button onClick={() => dispatch(setEditMode())}>
          Edit: {editMode ? "on" : "off"}
        </button>
        <SaveBtn />
        <LangSelect />
      </div>
      {!contentLoaded && <p>Loading...</p>}
      {contentLoaded && (
        <div className="flex">
          <Nav />
          <div className="main">
            {screen === 0 && <Landing />}
            {screen === 1 && <Translation />}
            {screen === 2 && <Justice />}
            {screen === 3 && <Clients />}
            {screen === 4 && <About />}
            {screen === 5 && <Contact />}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
