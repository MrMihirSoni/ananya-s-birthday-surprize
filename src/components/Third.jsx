import React from "react";
import image from "../assets/Excited.png";

const Third = ({ count, setCount }) => {
  return (
    <div className="main">
      <div className="text">
        <p>Yes today is ....</p>
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

export default Third;
