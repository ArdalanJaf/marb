import styled from "styled-components";

export const StyledBtn = styled.button`
  background: ${(props) => props.theme.color[props.color]};
  color: white;
  font-size: 1.5em;
  font-weight: 500;
  text-align: center;
  padding: 1em;
  border-radius: 1em;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.2) 0 3px 5px -1px,
    rgba(0, 0, 0, 0.14) 0 6px 10px 0, rgba(0, 0, 0, 0.12) 0 1px 18px 0;
  cursor: pointer;

  &:hover:hover {
    background: #f6f9fe;
    color: #174ea6;
  }

  &:active {
    box-shadow: 0 4px 4px 0 rgb(60 64 67 / 30%),
      0 8px 12px 6px rgb(60 64 67 / 15%);
    outline: none;
  }

  &:focus {
    outline: none;
    border: 2px solid #4285f4;
  }
`;
