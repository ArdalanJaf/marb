import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectContent } from "../app/contentSlice";
import axios from "axios";
import { API_URL } from "../config/API_URL";
import flattenObj from "../utils/flattenObj";
import { resetEditTracker } from "../app/contentSlice";
import { RaceBy } from "@uiball/loaders";
import { StyledEditBtn } from "./styledComponents/StyledEditBtn";

export default function SaveBtn() {
  const dispatch = useDispatch();
  const content = useSelector(selectContent);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSave = async () => {
    try {
      setIsLoading(true);
      let editedContent = getEditedContent(content);
      let res = await axios.post(API_URL + "/content", editedContent);
      setIsLoading(false);
      if (!res.data.error) {
        dispatch(resetEditTracker());
      } else {
        setErrorMsg(res.data.error);
      }
    } catch (error) {
      setErrorMsg(error);
    }
  };

  const getEditedContent = (content) => {
    let editedContent = {};
    Object.keys(content).forEach((k) => {
      if (k !== "editedTracker") {
        editedContent[k] = flattenObj(content[k]).filter((c) => {
          return content.editedTracker[k].includes(c.id) === true;
        });
      }
    });
    return editedContent;
  };

  const hasEdited = (obj) => {
    let allEditTracks = flattenObj(obj).flat();
    return allEditTracks.length > 0 ? true : false;
  };

  return (
    <div>
      <StyledEditBtn
        onClick={() => handleSave()}
        disabled={hasEdited(content.editedTracker) ? false : true}
      >
        {isLoading ? <RaceBy size={35} color="#231F20" /> : "SAVE"}
      </StyledEditBtn>
      {errorMsg && <p>{errorMsg}</p>}
    </div>
  );
}
