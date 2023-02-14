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
    if (mobileMode) setShowMenu(false);
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
      <div className="header">
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
      </div>
      <nav
        className={`${mobileMode ? "dropDownNav" : ""} ${
          mobileMode && !showMenu ? "hideMenu" : ""
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
          <li>
            <LangSelect />
          </li>
        </ul>
      </nav>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background-color: ${(props) => props.theme.color.primary};
  @media (min-width: ${(props) => props.theme.breakpoint.desktop}) {
    min-height: 100vh;
    min-width: 20%;
  }

  .header {
    background-color: ${(props) => props.theme.color.primary};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1em;
    position: relative;
    z-index: 1;

    @media (min-width: ${(props) => props.theme.breakpoint.desktop}) {
      /* height: 100vh;
      min-width: 20%; */
      flex-direction: column;
      justify-content: start;
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

      @media (min-width: ${(props) => props.theme.breakpoint.desktop}) {
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
  }

  div,
  li,
  button {
    cursor: pointer;
  }

  nav {
    /* background-color: lightblue; */
    background-color: none;
  }
  .dropDownNav {
    position: absolute;
    top: 0;
    right: 0;
    /* transform: translateY(-100%); */
    transition: transform 0.2s ease-in-out;
    width: 100%;
    height: calc(100vh - 54.5px);
    margin-top: 54.5px;
    background-color: ${(props) => props.theme.color.light};
    @media (min-width: ${(props) => props.theme.breakpoint.tablet}) {
      /* light drop down style*/
      width: fit-content;
      height: fit-content;
      /* background-color: none; */
    }
  }
  .hideMenu {
    transform: translateY(-100%);
    /* display: none; */
  }

  ul {
    list-style: none;
    padding: 1em;
    margin: 0;
    li {
      /* color: white; */
      margin-top: 1em;
      font-size: 2rem;
      /* cursor: pointer; */

      &:hover {
        color: red;
      }
    }
  }
`;
