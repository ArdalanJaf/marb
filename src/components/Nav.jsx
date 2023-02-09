import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setScreen, setMobileMode } from "../app/generalSlice";
import styled from "styled-components";
import LangSelect from "./LangSelect";
import MARBLogo from "./MARBLogo";
import BurgerMenuIcon from "./BurgerMenuIcon";

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
    // console.log("added event listener");
  }, []);

  useEffect(() => {
    if (!mobileMode) setShowMenu(false);
  }, [mobileMode]);

  return (
    <StyledHeader>
      <div onClick={() => handleClick(0)}>
        <div>
          <MARBLogo />
          {/* <img src="../assets/marb.svg" /> */}
        </div>
        <h1>MARB </h1>
        {/* <p>{mobileMode ? "true" : "false"}</p> */}
      </div>

      {mobileMode && (
        <BurgerMenuIcon
          onClick={() => setShowMenu(!showMenu)}
          bool={showMenu}
        />
        // <button onClick={() => setShowMenu(!showMenu)}>menu</button>
      )}

      <nav
        className={`${mobileMode ? "mobileNav" : ""} ${
          mobileMode && !showMenu ? "hide" : ""
        }`}
      >
        <ul>
          <li>
            <LangSelect />
          </li>
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
    min-width: 20%;
    flex-direction: column;
    justify-content: start;
  }

  div,
  li,
  button {
    cursor: pointer;
  }

  /* logo + title */
  & > div {
    display: flex;
    align-items: center;
    position: relative;

    h1 {
      /* color: white; */
    }

    /* logo svg */
    & > div {
      width: 5em;
      margin: 0.5em;
      svg {
        path {
          /* stroke: white; */
        }
      }
    }

    @media (min-width: ${(props) => props.theme.landscapeThreshold}) {
      display: block;
      margin-top: 5em;

      h1 {
        font-size: 5em;
        margin-top: 0.2em;
      }

      & > div {
        width: 10em;
        margin: auto;
      }
    }
  }

  .hide {
    display: none;
  }

  nav {
    /* background-color: lightblue; */
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
      color: white;
      margin-bottom: 1em;
      font-size: 2rem;
      cursor: pointer;

      &:hover {
        color: red;
      }
    }
  }

  /* @media (min-width: ${(props) => props.theme.landscapeThreshold}) {
    display: ;
  } */
`;
