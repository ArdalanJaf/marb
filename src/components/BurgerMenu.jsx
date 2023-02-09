import React from "react";
import styled from "styled-components";

export default function BurgerMenu({ bool, onClick }) {
  return (
    <StyledBurgerIcon>
      <button
        type="checkbox"
        id="burger-menu__input"
        onClick={onClick}
        checked={bool}
      />
      <label for="burger-menu__input" aria-label="menu icon" />
      <div className={bool ? "checked" : ""}>
        <div className="i1"></div>
        <div className="i2"></div>
        <div className="i3"></div>
      </div>
    </StyledBurgerIcon>
  );
}

const StyledBurgerIcon = styled.div`
  cursor: pointer;
  position: relative;

  button {
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 4.5em;
    height: 4.5em;
    transform: translate(-50%, -50%);
  }

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 4.5em;
    height: 4.5em;
    transform: translate(-50%, -50%);
  }
  &:hover div > div,
  &:focus-within div > div {
    background-color: ${(props) => props.theme.color.highlight};
  }

  /*burger icon*/
  & div {
    position: relative;
    bottom: 8px;
    width: 40px;
    height: 2px;
    margin: 5px;
    margin-bottom: 10px;
    & > div {
      background-color: #000;
      transition: all 0.15s ease-in-out;
    }
  }

  .checked {
    .i1 {
      transform: rotate(45deg) translate(10px, 10px);
    }
    .i2 {
      opacity: 0;
      width: 0;
    }
    .i3 {
      transform: rotate(-45deg) translate(7px, -7px);
    }
    div {
      /* background-color: ${(props) => props.theme.color.highlight}; */
    }
  }
`;
