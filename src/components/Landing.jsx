import React from "react";
import { useSelector } from "react-redux";
import TinyEditor from "./subComponents/TinyEditor";
import TextOnlyEditor from "./subComponents/TextOnlyEditor";
import createMarkup from "../utils/createMarkup";
import styled from "styled-components";
import Slideshow from "./subComponents/Slideshow";

export default function Landing() {
  const { landing } = useSelector((state) => state.content.texts);
  const { lang, editMode } = useSelector((state) => state.general);

  return (
    <StyledLanding>
      {/* <h2>
        {!editMode ? (
          landing.title[lang]
        ) : (
          <TextOnlyEditor
            keys={["texts", "landing", "title", lang]}
            id={landing.title.id}
          />
        )}
      </h2> */}
      <Slideshow />

      {/* {!editMode ? (
        <div dangerouslySetInnerHTML={createMarkup(landing.body[lang])}></div>
      ) : (
        <TinyEditor
          keys={["texts", "landing", "body", lang]}
          id={landing.body.id}
        />
      )} */}
    </StyledLanding>
  );
}

const StyledLanding = styled.div`
  background-color: ${(props) => props.theme.color.orange};
  position: relative;
  /* min-height: 100vh; */
  /* padding: 1em; */
  height: 100%;

  /* display: flex;
  align-items: center;
  justify-content: center; */

  h2 {
    font-size: 5em;
  }

  @media (min-width: ${(props) => props.theme.breakpoint.desktop}) {
    min-height: 100vh;
    height: 100%;
  }
`;
