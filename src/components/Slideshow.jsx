import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import TextOnlyEditor from "./TextOnlyEditor";
import styled from "styled-components";
import imgSpeech from "../assets/images/speech.jpg";
import { StyledBtn } from "./styledComponents/StyledBtns";
import { setScreen } from "../app/generalSlice";

// import imgTeam from "../assets/images/team.jpg";

export default function Slideshow() {
  const dispatch = useDispatch();
  const {
    texts: { landing },
    reviews,
  } = useSelector((state) => state.content);

  const { lang, editMode } = useSelector((state) => state.general);
  const [dotClicked, setDotClicked] = useState(false);
  const [slide, setSlide] = useState(1);
  let noOfSlides = 3;
  const dotsMap = []; // for dot buttons
  for (let i = 1; i <= noOfSlides; i++) dotsMap.push(i);
  let sliderOffset =
    slide > 1 ? `${(100 / noOfSlides).toFixed(2) * (slide - 1)}` : "0";

  const handleKeyDown = (e) => {
    switch (e.key) {
      case "ArrowLeft":
        setDotClicked(true);
        setSlide(slide === 1 ? noOfSlides : slide - 1);
        break;
      case "ArrowRight":
        setDotClicked(true);
        setSlide(slide === noOfSlides ? 1 : slide + 1);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  useEffect(() => {
    if (!dotClicked) {
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
            transform: `translateX(-${sliderOffset}%)`,
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
            <StyledBtn color="blue" onClick={() => dispatch(setScreen(5))}>
              Contact Now
            </StyledBtn>
            {/* add Call to Action (contact/learn more/testimonials) */}
          </StyledSlide>
          <StyledSlide bgImg={imgSpeech}>
            {/* <img src={imgSpeech} /> */}
            <h2>Language Justice</h2>
          </StyledSlide>
          <StyledSlide>
            <h2>reviews</h2>
          </StyledSlide>
        </StyledSlider>
        <StyledDots>
          {dotsMap.map((i) => {
            return (
              <button
                key={i}
                value={i}
                style={{ opacity: `${slide == i ? "1" : "0.3"}` }}
                // className={`${slide === i ? "checked" : ""}`}
                onClick={(e) => {
                  setSlide(e.target.value);
                  if (!dotClicked) setDotClicked(true);
                }}
              />
            );
          })}
        </StyledDots>
      </StyledSlideshow>
    </StyledSlideshowContainer>
  );
}

const StyledSlideshowContainer = styled.div`
  background-color: darkorange;
  /* padding: 1em; */
  /* width: ; */
  height: 100%;
  min-height: 100%;
  display: flex;
  align-items: center;
`;

const StyledSlideshow = styled.div`
  overflow: hidden;
  height: 100%;
`;

const StyledSlider = styled.div`
  width: 300%;
  height: 100%; //
  transition: transform 0.3s ease-in-out;
  display: flex;
  /* & > div {
    background-color: blue;
    &:nth-of-type(even) {
      background-color: red;
    }
  } */
`;

const StyledSlide = styled.div`
  background-image: url(${(props) => props.bgImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    object-fit: contain;
  }
`;

const StyledDots = styled.div`
  position: absolute;
  bottom: 1em;
  left: 50%;
  transform: translateX(-50%);
  button {
    border-radius: 50%;
    height: 1em;
    width: 1em;
    margin: 1em 0.4em 0;
    border: none;
    background-color: #fff;
    cursor: pointer;
    transition: 0.1s ease-in-out;
    &:hover {
      transform: scale(1.3);
    }
  }
`;
