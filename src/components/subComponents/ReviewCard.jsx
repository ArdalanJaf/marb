import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { activateDelCheck } from "../../app/generalSlice";
import {
  setOrder,
  applySortOrders,
  trackEdit,
  delReview,
} from "../../app/contentSlice";
import { StyledEditBtn } from "../styledComponents/StyledEditBtn";
import TextOnlyEditor from "./TextOnlyEditor";
import styled from "styled-components";
import axios from "axios";
import { API_URL } from "../../config/API_URL";

export default function ReviewCard({ review, i }) {
  const dispatch = useDispatch();
  const { lang, editMode } = useSelector((state) => state.general);
  const { reviews, sortOrders } = useSelector((state) => state.content);
  let r = review;
  const [delCheck, setDelCheck] = useState({
    active: false,
    confirmed: false,
    id: null,
  });
  const [loading, setLoading] = useState(false);

  const handleSort = (i, direction) => {
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

  const handleDel = async () => {
    setLoading(true);

    const result = await axios.post(API_URL + "/del_review", {
      id: delCheck.id,
    });
    setLoading(false);

    // reset delCheck
    setDelCheck({ active: false, confirmed: false, id: null });
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
            onClick={() => handleSort(i, true)}
            disabled={i > 0 ? false : true}
          >
            up
          </button>
          <button
            onClick={() => handleSort(i, false)}
            disabled={i < reviews.length - 1 ? false : true}
          >
            down
          </button>
          <button
            onClick={() => setDelCheck({ ...delCheck, active: true, id: r.id })}
          >
            Delete
          </button>
        </StyledReviewBtns>
      )}

      {/* {delCheck.active && (
        <StyledDelCheck>
          <p>Are you sure you want to delete this?</p>
          <div>
            <StyledEditBtn onClick={handleDel}>DELETE</StyledEditBtn>{" "}
            <StyledEditBtn
              onClick={() =>
                setDelCheck({ ...delCheck, active: false, id: null })
              }
            >
              CANCEL
            </StyledEditBtn>
          </div>
        </StyledDelCheck>
      )} */}
    </StyledReviewCard>
  );
}

const StyledReviewCard = styled.div`
  background-color: ${(props) => props.theme.color.orange};
  border-radius: 1em;
  box-shadow: 5px 5px 20px #6d6b6b40;
  width: 100%;
  /* max-width: 32%; */
  padding: 2em;
  position: relative;
  /* height: fit-content; */
  /* flex: 1; */
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

const StyledDelCheck = styled.div`
  position: fixed;
  background-color: ${(props) => props.theme.color.dark};
  color: ${(props) => props.theme.color.light};
  padding: 3em;
  border-radius: 1em;
  z-index: 99;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  p {
    margin-top: 0;
    font-size: 3em;
    padding: 0 1em;
  }

  div {
    display: flex;
    justify-content: space-evenly;
  }
`;
