import React from "react";
import styled from "styled-components";
import imgSpeech from "../assets/images/speech.jpg";
// import imgTeam from "../assets/images/team.jpg";

export default function Slideshow() {
  return (
    <StyledSlideshow>
      <div className="slideshow">
        <div className="slider">
          <div className="slide">
            <img src={imgSpeech} />
          </div>
          <div className="slide"></div>
          <div className="slide"></div>
        </div>
      </div>

      <div className="slideshowDots">
        {/* {colors.map((_, idx) => (
          <div key={idx} className="slideshowDot"></div>
        ))} */}
      </div>
    </StyledSlideshow>
  );
}

const StyledSlideshow = styled.div`
  .slideShow {
    margin: 0 auto;
    overflow: hidden;
    max-width: 100%;

    .slider {
      white-space: nowrap;
    }

    .slide {
      display: inline-block;
      height: 400px;
      width: 100%;
      border-radius: 40px;

      img {
        object-fit: contain;
      }
    }
  }
`;
