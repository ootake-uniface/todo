import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { toggleRun } from "../tour";



const Content = () => {
  const tourState = useSelector(state => state.tour);
  const dispatch = useDispatch();

  return (
    <div className="content">
      <div className="start-btn-wrapper">
        <button onClick={() => dispatch(toggleRun())}>
          ガイドツアースタート
        </button>
      </div>
    </div>
  );
};
export default Content;