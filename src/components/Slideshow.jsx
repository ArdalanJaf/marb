import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import TextOnlyEditor from "./TextOnlyEditor";
import styled from "styled-components";
import imgSpeech from "../assets/images/speech.jpg";

// import imgTeam from "../assets/images/team.jpg";

export default function Slideshow() {
  const { landing } = useSelector((state) => state.content.texts);
  const { lang, editMode } = useSelector((state) => state.general);
  const [btnClicked, setBtnClicked] = useState(false);
  const [slide, setSlide] = useState(1);
  let noOfSlides = 3;
  const dotsMap = []; // for dot buttons
  for (let i = 1; i <= noOfSlides; i++) dotsMap.push(i);

  useEffect(() => {
    if (!btnClicked) {
      const timer = setTimeout(() => {
        setSlide(slide !== noOfSlides ? slide + 1 : 1);
      }, 3000);
      return () => clearTimeout(timer);
    }
  });

  //detect swipe instead of buttons on mobile mode? what about tablet?

  return (
    <StyledSlideshowContainer>
      <StyledSlideshow>
        <StyledSlider
          style={{
            transform: `translateX(-${
              slide > 1 ? `${(100 / noOfSlides).toFixed(2) * (slide - 1)}` : "0"
            }%)`,
          }}
        >
          <StyledSlide>
            <h2>
              {!editMode ? (
                landing.title[lang]
              ) : (
                <TextOnlyEditor
                  keys={["texts", "landing", "title", lang]}
                  id={landing.title.id}
                />
              )}
            </h2>
          </StyledSlide>
          <StyledSlide>{/* <img src={imgSpeech} /> */}</StyledSlide>
          <StyledSlide></StyledSlide>
        </StyledSlider>

        <StyledDots />
        {dotsMap.map((i) => {
          return (
            <button
              key={i}
              value={i}
              onClick={(e) => {
                setSlide(e.target.value);
                if (!btnClicked) setBtnClicked(true);
              }}
            />
          );
        })}
      </StyledSlideshow>
      <p>
        {slide} {(100 / noOfSlides).toFixed(2) * (slide - 1)}
      </p>
      <p>
        {slide > 1 ? `${(100 / noOfSlides).toFixed(2) * (slide - 1)}` : "0"}
      </p>
    </StyledSlideshowContainer>
  );
}

const StyledSlideshowContainer = styled.div`
  background-color: darkorange;
  padding: 1em;
  /* width: ; */
  height: 100%;
  min-height: 100%;
`;

const StyledSlideshow = styled.div`
  overflow-x: hidden;
`;

const StyledSlider = styled.div`
  width: 300%;
  height: 80vh;
  transition: transform 0.3s ease-in-out;
  display: flex;
  & > div {
    background-color: blue;
    width: 100%;
    &:nth-of-type(even) {
      background-color: red;
    }
  }
`;

const StyledSlide = styled.div``;

const StyledDots = styled.div``;
