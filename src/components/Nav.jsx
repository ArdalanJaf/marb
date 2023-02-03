import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setScreen, setMobileMode } from "../app/generalSlice";
import styled from "styled-components";
import LangSelect from "./LangSelect";

export default function Nav() {
  const dispatch = useDispatch();
  const { nav } = useSelector((state) => state.fixedContent);
  const { lang, mobileMode } = useSelector((state) => state.general);
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = (screen) => {
    dispatch(setScreen(screen));
  };

  useEffect(() => {
    window.addEventListener("resize", () => dispatch(setMobileMode()));
    console.log("added event listener");
  }, []);

  useEffect(() => {
    if (!mobileMode) setShowMenu(false);
  }, [mobileMode]);

  return (
    <StyledHeader>
      <div onClick={() => handleClick(0)}>
        <h1>logo</h1>
        <h1>MARB </h1>
        {/* <p>{mobileMode ? "true" : "false"}</p> */}
      </div>
      <LangSelect />
      {mobileMode && (
        <button onClick={() => setShowMenu(!showMenu)}>menu</button>
      )}
      <nav
        className={`${mobileMode ? "mobileNav" : "desktopNav"} ${
          mobileMode && !showMenu ? "hide" : ""
        }`}
      >
        <ul>
          {Object.keys(nav).map((k, i) => {
            return (
              <li key={i} onClick={() => handleClick(nav[k].screen)}>
                {nav[k][lang]}
              </li>
            );
          })}
        </ul>
      </nav>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background-color: ${(props) => props.theme.color.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1em;
  position: relative;

  @media (min-width: ${(props) => props.theme.landscapeThreshold}) {
    height: 100vh;
    flex-direction: column;
    justify-content: start;
  }

  div,
  li,
  button {
    cursor: pointer;
  }

  /* logo */
  & > div {
    display: flex;
    align-items: center;

    @media (min-width: ${(props) => props.theme.landscapeThreshold}) {
      display: block;
    }
  }

  .hide {
    display: none;
  }

  nav {
    background-color: lightblue;
  }
  .mobileNav {
    position: absolute;
    bottom: 0;
    transform: translateY(100%);
    right: 0;
  }

  ul {
    list-style: none;
    padding: 1em;
    li {
      margin-bottom: 1em;
    }
  }

  /* @media (min-width: ${(props) => props.theme.landscapeThreshold}) {
    display: ;
  } */
`;
