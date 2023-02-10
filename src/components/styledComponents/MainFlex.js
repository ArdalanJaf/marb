import styled from "styled-components";

export const MainFlex = styled.div`
  display: block;

  /* .main container */
  & > div {
    height: calc(100vh - 54.5px);
    overflow-y: scroll;
    & > div {
      height: 100%;
    }
  }
  @media (min-width: ${(props) => props.theme.breakpoint.desktop}) {
    display: flex;
    background-color: "green";
    & > div {
      flex: 1;
      min-height: 100vh;
    }
  }
`;
