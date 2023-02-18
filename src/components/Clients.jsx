import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import TinyEditor from "./TinyEditor";
import TextOnlyEditor from "./TextOnlyEditor";
import createMarkup from "../utils/createMarkup";
import styled from "styled-components";
import ReviewCard from "./ReviewCard";

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
          // console.log(r.id);
          // if (r.id === 1) return <p>nope</p>;
          // return (
          //   <StyledReview key={i}>
          //     {!editMode ? (
          //       <h3>{r.name}</h3>
          //     ) : (
          //       <TextOnlyEditor keys={["reviews", i, "name"]} id={r.id} />
          //     )}
          //     {!editMode ? (
          //       <p>{r[lang]}</p>
          //     ) : (
          //       <TextOnlyEditor keys={["reviews", i, lang]} id={r.id} />
          //     )}
          //     {editMode && (
          //       <div>
          //         <button>up</button>
          //         <button>down</button>
          //       </div>
          //     )}
          //   </StyledReview>
          // );
          return <ReviewCard review={r} i={i} key={i} />;
        })}
      </StyledReviewContainer>
    </StyledClients>
  );
}

const StyledClients = styled.div`
  background-color: yellow;
  padding: 1em;
  max-width: 100vw;
`;

const StyledReviewContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
`;

const StyledReview = styled.div`
  background-color: rgba(256, 256, 256, 0.6);
  border-radius: 1em;
  width: 100%;
  /* margin: 0 1em; */

  p {
  }
`;
