import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLang, selectLang } from "../app/generalSlice";
import styled from "styled-components";
import crIcon from "../assets/icons/haiti.png";
import enIcon from "../assets/icons/english.png";
import spIcon from "../assets/icons/spain.png";

export default function LangSelect() {
  const dispatch = useDispatch();
  const lang = useSelector(selectLang);

  const handleClick = (e) => {
    // console.log(e.target.value);
    dispatch(setLang(e));
  };

  return (
    // <select onChange={(e) => dispatch(setLang(e.target.value))} value={lang}>
    //   <option value="cr">Creole</option>
    //   <option value="sp">Spanish</option>
    //   <option value="en">English</option>
    // </select>
    <LangSelectStyled>
      <img src={crIcon} onClick={() => handleClick("cr")} />
      <img src={enIcon} onClick={() => handleClick("en")} />
      <img src={spIcon} onClick={(e) => handleClick("sp")} />
    </LangSelectStyled>
  );
}

const LangSelectStyled = styled.div`
  display: flex;
  padding: 0.5em;
  justify-content: space-around;
  max-width: 160px;
  margin: auto;
  img {
    height: 1.6em;
    transition: transform 0.1s ease-in-out;

    &:hover {
      transform: scale(1.2);
    }
  }
`;
