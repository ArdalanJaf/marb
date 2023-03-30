import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import TinyEditor from "./subComponents/TinyEditor";
import TextOnlyEditor from "./subComponents/TextOnlyEditor";
import createMarkup from "../utils/createMarkup";
import styled from "styled-components";
import ReviewCard from "./subComponents/ReviewCard";

export default function Clients() {
  const {
    texts: { clients },
    clientLogos,
    reviews,
    sortOrders,
  } = useSelector((state) => state.content);
  const { lang, editMode } = useSelector((state) => state.general);

  // const sortBySortOrder = (arr, sortArr) => {
  //   let returnArr = [...arr];
  //   returnArr.sort((a, b) => {
  //     return sortArr.indexOf(a.id) < sortArr.indexOf(b.id)
  //       ? -1
  //       : sortArr.indexOf(a.id) > sortArr.indexOf(b.id)
  //       ? 1
  //       : 0;
  //   });
  //   // console.log(returnArr);
  //   return returnArr;
  // };

  // let orderedArr = sortBySortOrder(
  //   [...reviews],
  //   [...sortOrders.reviews.idOrder]
  // );

  return (
    <StyledClients>
      <h1>
        {!editMode ? (
          clients.title[lang]
        ) : (
          <TextOnlyEditor
            keys={["texts", "clients", "title", lang]}
            id={clients.title.id}
          />
        )}
      </h1>

      {!editMode ? (
        <div dangerouslySetInnerHTML={createMarkup(clients.body[lang])} />
      ) : (
        <TinyEditor
          keys={["texts", "clients", "body", lang]}
          id={clients.body.id}
        />
      )}

      <StyledReviewContainer>
        {reviews.map((r, i) => {
          return <ReviewCard review={r} i={i} key={i} />;
        })}
      </StyledReviewContainer>
    </StyledClients>
  );
}

const StyledClients = styled.div`
  background-color: ${(props) => props.theme.color.yellow};
  padding: 1em;
  max-width: 100vw;
`;

const StyledReviewContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  align-items: center;
  & > div {
    max-width: 50%;
    flex: 1;
  }
  /* display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1em; */
`;
