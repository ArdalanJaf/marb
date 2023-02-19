import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setOrder, applySortOrders, trackEdit } from "../app/contentSlice";
import TextOnlyEditor from "./TextOnlyEditor";
import styled from "styled-components";

export default function ReviewCard({ review, i }) {
  const dispatch = useDispatch();
  const { lang, editMode } = useSelector((state) => state.general);
  const { reviews, sortOrders } = useSelector((state) => state.content);
  let r = review;

  const handleClick = (i, direction) => {
    dispatch(setOrder({ key: "reviews", i, direction }));
    dispatch(applySortOrders());
    dispatch(
      trackEdit({
        id: sortOrders.reviews.id,
        keys: ["sortOrders", "reviews"],
        value: sortOrders.reviews.sortOrder,
      })
    );
  };

  return (
    <StyledReviewCard key={i}>
      <StyledReviewText>
        {!editMode ? (
          <p>{r[lang]}</p>
        ) : (
          <TextOnlyEditor keys={["reviews", i, lang]} id={r.id} />
        )}
      </StyledReviewText>

      <StyledReviewName>
        {!editMode ? (
          <h3>{r.name}</h3>
        ) : (
          <TextOnlyEditor keys={["reviews", i, "name"]} id={r.id} />
        )}
      </StyledReviewName>

      {editMode && (
        <StyledReviewBtns>
          <button
            onClick={() => handleClick(i, true)}
            disabled={i > 0 ? false : true}
          >
            up
          </button>
          <button
            onClick={() => handleClick(i, false)}
            disabled={i < reviews.length - 1 ? false : true}
          >
            down
          </button>
        </StyledReviewBtns>
      )}
    </StyledReviewCard>
  );
}

const StyledReviewCard = styled.div`
  background-color: lightgreen;
  border-radius: 1em;
  box-shadow: 5px 5px 20px #6d6b6b40;
  width: 100%;
  /* max-width: 32%; */
  padding: 2em;
  position: relative;
  height: fit-content;
  flex: 1;
  /* margin: 0 1em; */
`;

const StyledReviewName = styled.div`
  h3 {
    margin-bottom: 0;
  }
`;

const StyledReviewText = styled.div`
  overflow-wrap: break-word;
  p {
    /* display: block; */
    margin-top: 0;
    max-width: 100%;
    font-size: 1.5em;
  }
`;

const StyledReviewBtns = styled.div`
  position: absolute;
  bottom: -1em;
  left: 50%;
  transform: translateX(-50%);
`;
