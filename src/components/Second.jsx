import React from "react";
import image from "../assets/Thinking.png";

const Second = ({ count, setCount }) => {
  return (
    <div className="main">
      <div className="text">
        <p>What's Special about today?</p>
        <img src={image} alt="" />
      </div>
      <button className="leftBtn" onClick={() => setCount(count - 1)}>
        <i className="bx bxs-left-arrow"></i>
      </button>
      <button className="rightBtn" onClick={() => setCount(count + 1)}>
        <i className="bx bxs-right-arrow"></i>
      </button>
    </div>
  );
};

export default Second;
