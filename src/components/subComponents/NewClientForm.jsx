import React, { useState } from "react";
import { StyledBtn } from "../styledComponents/Btn.styled";
import axios from "axios";
import { API_URL } from "../../config/API_URL";
import { RaceBy } from "@uiball/loaders";
import styled from "styled-components";

const StyledNewEntryForm = styled.div`
  background-color: ${(props) => props.theme.color.primary};
  padding: 2rem;
  border-radius: 2rem;
  font-size: 1.5rem;
  max-width: 60rem;
  box-shadow: rgba(0, 0, 0, 0.2) 0 3px 5px -1px,
    rgba(0, 0, 0, 0.14) 0 6px 10px 0, rgba(0, 0, 0, 0.12) 0 1px 18px 0;

  h2 {
    margin-top: 0;
    color: #fff;
  }

  label {
    text-align: left;
    /* width: fit-content; */
    flex: 1;
    display: block;
  }

  input {
    padding: 1rem;
    border-radius: 1rem;
    border-style: solid;
    width: 100%;
    margin-top: 0.5rem;
  }

  div:first-of-type {
    margin-bottom: 2rem;
  }

  textarea {
    width: 100%;
    min-height: 100px;
    padding: 1rem;
    border-radius: 1rem;
    border-width: 2px;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
  }
  button {
    font-size: 1.6rem;
    min-width: 12rem;
  }
`;

const StyledFlex = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 1rem;
`;

export default function NewClientForm({ closeFn }) {
  const [name, setName] = useState("");
  const [organisation, setOrganisation] = useState("");
  const [quoteCr, setQuoteCr] = useState("");
  const [quoteEn, setQuoteEn] = useState("");
  const [quoteSp, setQuoteSp] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    try {
      await axios.post(API_URL + "/add_review", {
        name,
        organisation,
        quoteCr,
        quoteEn,
        quoteSp,
      });
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  return (
    <StyledNewEntryForm>
      <h2>Add New Review</h2>
      <StyledFlex>
        <label>
          Name: <input value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Organisation:{" "}
          <input
            value={organisation}
            onChange={(e) => setOrganisation(e.target.value)}
          />
        </label>
      </StyledFlex>
      <div>
        <label htmlFor="quoteCr">Quote in Creole: </label>
        <textarea
          id="quoteCr"
          value={quoteCr}
          onChange={(e) => setQuoteCr(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="quoteEn">Quote in English: </label>
        <textarea
          id="quoteCr"
          value={quoteEn}
          onChange={(e) => setQuoteEn(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="quoteSp">Quote in Spanish: </label>
        <textarea
          id="quoteSp"
          value={quoteSp}
          onChange={(e) => setQuoteSp(e.target.value)}
        />
      </div>

      <StyledFlex>
        <StyledBtn
          color="blue"
          onClick={handleClick}
          disabled={
            name && organisation && quoteCr && quoteEn && quoteSp ? false : true
          }
        >
          {isLoading ? <RaceBy size={35} color="#231F20" /> : "Add!"}
        </StyledBtn>
        <StyledBtn color="red" onClick={() => closeFn()}>
          Cancel
        </StyledBtn>
      </StyledFlex>
    </StyledNewEntryForm>
  );
}
