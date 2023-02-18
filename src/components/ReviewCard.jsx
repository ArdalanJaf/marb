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
    <StyledReview key={i}>
      {!editMode ? (
        <h3>{r.name}</h3>
      ) : (
        <TextOnlyEditor keys={["reviews", i, "name"]} id={r.id} />
      )}
      {!editMode ? (
        <p>{r[lang]}</p>
      ) : (
        <TextOnlyEditor keys={["reviews", i, lang]} id={r.id} />
      )}
      {editMode && (
        <div>
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
        </div>
      )}
    </StyledReview>
  );
}

const StyledReview = styled.div`
  background-color: rgba(256, 256, 256, 0.6);
  border-radius: 1em;
  width: 100%;
  /* margin: 0 1em; */
`;
