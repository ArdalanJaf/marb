import styled from "styled-components";

export const MainFlex = styled.div`
  display: block;
  @media (min-width: ${(props) => props.theme.landscapeThreshold}) {
    display: flex;
    background-color: "green";
    & > div {
      flex: 1;
    }
  }
`;
