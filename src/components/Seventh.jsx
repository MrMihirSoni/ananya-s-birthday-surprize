import React from "react";

const Seventh = ({ count, setCount }) => {
  return (
    <div className="main">
      <div className="text">
        <p>aage kuch nhi hai...</p>
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

export default Seventh;
