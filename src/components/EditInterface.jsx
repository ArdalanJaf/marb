import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addReview, trackEdit } from "../app/contentSlice";
import styled from "styled-components";
import SaveBtn from "./SaveBtn";
import { StyledEditBtn } from "./styledComponents/StyledEditBtn";

export default function EditInterface() {
  const dispatch = useDispatch();
  const { editMode, screen } = useSelector((state) => state.general);
  const { sortOrders } = useSelector((state) => state.content);

  const handleAddReview = () => {
    // dispatch(addReview());
    // dispatch(
    //   trackEdit({
    //     id: sortOrders.reviews.id,
    //     keys: ["sortOrders", "reviews"],
    //     value: sortOrders.reviews.sortOrder,
    //   })
    // );
    // fuck this? just add new review straight to SQL
    // so new Review brings up new review panel.
  };
  return (
    <>
      {editMode && (
        <>
          <StyledPanel className="EDIT">
            {/* <StyledEditBtn>PREVIEW</StyledEditBtn>  Need exit button? */}
            {screen === 3 && (
              <StyledEditBtn onClick={() => handleAddReview()}>
                ADD REVIEW
              </StyledEditBtn>
            )}
            <SaveBtn />
          </StyledPanel>
        </>
      )}
    </>
  );
}

const StyledPanel = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  /* height: 100px; */
  /* background-color: red; */
  z-index: 99;
  display: flex;
  justify-content: end;
  align-items: end;
  padding: 1em;
  gap: 1em;
  opacity: 0.5;

  @media (min-width: ${(props) => props.theme.breakpoint.desktop}) {
    top: 0;
    bottom: auto;
  }
`;

const StyledNewContainer = styled.div`
  position: fixed;
  background-color: ${(props) => props.theme.color.dark};
  color: ${(props) => props.theme.color.light};
  padding: 3em;
  border-radius: 1em;
  z-index: 99999;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
