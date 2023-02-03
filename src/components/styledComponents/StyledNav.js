import styled from "styled-components";

export const StyledNav = styled.nav`
  height: 100%;
  display: flex;
  background-color: ${(props) => props.theme.color.primary};

  ul {
    display: flex;
    list-style: none;
    flex-grow: 1;
  }

  @media (max-width: ${(props) => props.theme.landscapeThreshold}) {
    display: flex;
  }
`;
