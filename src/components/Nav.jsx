import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setScreen } from "../app/generalSlice";

export default function Nav() {
  const dispatch = useDispatch();
  const { nav } = useSelector((state) => state.fixedContent);
  const { lang } = useSelector((state) => state.general);

  const handleClick = (screen) => {
    dispatch(setScreen(screen));
  };

  return (
    <nav>
      <div onClick={() => handleClick(0)}>
        <h1>logo</h1>
        <h1>MARB</h1>
      </div>
      <ul>
        {Object.keys(nav).map((k, i) => {
          return (
            <li key={i} onClick={() => handleClick(nav[k].screen)}>
              {nav[k][lang]}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
