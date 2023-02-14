import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEditMode } from "./app/generalSlice";
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
import styled from "styled-components";
import "./App.css";

export default function App() {
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
      {!contentLoaded && <p>Loading...</p>}
      {contentLoaded && (
        <StyledFlexContainer>
          <Nav />
          <StyledMain>
            {screen === 0 && <Landing />}
            {screen === 1 && <Translation />}
            {screen === 2 && <Justice />}
            {screen === 3 && <Clients />}
            {screen === 4 && <About />}
            {screen === 5 && <Contact />}
          </StyledMain>
        </StyledFlexContainer>
      )}
      {/* <div style={{ backgroundColor: "lightGreen" }}>
        <button onClick={() => dispatch(setEditMode())}>
          Edit: {editMode ? "on" : "off"}
        </button>
        <SaveBtn />
      <LangSelect />
      </div> */}
    </div>
  );
}

const StyledFlexContainer = styled.div`
  display: block;
  /* height: 100vh; */
  /* overflow-y: scroll; */
  @media (min-width: ${(props) => props.theme.breakpoint.desktop}) {
    display: flex;
  }
`;

const StyledMain = styled.div`
  height: calc(100vh - 54.5px);
  /* background-color: blue; */
  /* height: 100%; */
  overflow-y: scroll;
  & > div {
    min-height: 100%;
  }

  @media (min-width: ${(props) => props.theme.breakpoint.desktop}) {
    flex: 1;
    /* min-height: 100vh; */
    height: 100vh;
    /* overflow-y: scroll; */
  }
`;
