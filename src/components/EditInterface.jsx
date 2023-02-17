import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import SaveBtn from "./SaveBtn";

export default function EditInterface() {
  const { about } = useSelector((state) => state.content.texts);
  const { editMode } = useSelector((state) => state.general);

  return (
    <>
      {editMode && (
        <StyledPanel className="EDIT">
          {/* <StyledEditBtn>PREVIEW</StyledEditBtn> */}
          <SaveBtn />
        </StyledPanel>
      )}
    </>
  );
}

const StyledPanel = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  /* height: 100px; */
  /* background-color: red; */
  z-index: 99;
  display: flex;
  justify-content: end;
  align-items: end;
  padding: 1em;
  gap: 1em;
  opacity: 0.5;

  @media (min-width: ${(props) => props.theme.breakpoint.desktop}) {
    top: 0;
    bottom: auto;
  }

  h2 {
    font-size: 5em;
    margin: 0;
  }
`;

const StyledEditBtn = styled.button`
  padding: 20px;
  font-size: 2em;
  border-radius: 0.8em;
  border: none;
  /* background-color: ${(props) => props.theme.color.seeThrough.red}; */
`;
