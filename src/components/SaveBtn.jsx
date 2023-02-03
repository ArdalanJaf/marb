import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectContent } from "../app/contentSlice";
import axios from "axios";
import { API_URL } from "../config/API_URL";
import flattenObj from "../utils/flattenObj";
import { resetEditTracker } from "../app/contentSlice";

export default function SaveBtn() {
  const dispatch = useDispatch();
  const content = useSelector(selectContent);

  const handleSave = async () => {
    try {
      let editedContent = getEditedContent(content);
      let res = await axios.post(API_URL + "/content", editedContent);
      if (res.data.status === 1) {
        dispatch(resetEditTracker());
        // saved notification
      }
    } catch (error) {
      console.log(error);
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
    // return flattenObj(contentObj).filter((c) => {
    //   return idsOfEdited[key].includes(c.id) === true;
    // });
    return editedContent;
  };

  return (
    <div>
      <button onClick={() => handleSave()}>Save</button>
    </div>
  );
}
