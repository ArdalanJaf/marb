import React from "react";
import { useSelector } from "react-redux";
import TinyEditor from "./TinyEditor";
import TextOnlyEditor from "./TextOnlyEditor";
import createMarkup from "../utils/createMarkup";
import styled from "styled-components";
import Slideshow from "./Slideshow";

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
  background-color: orange;
  /* min-height: 100vh; */
  padding: 1em;
  /* display: flex;
  align-items: center;
  justify-content: center; */

  h2 {
    font-size: 5em;
  }
`;
