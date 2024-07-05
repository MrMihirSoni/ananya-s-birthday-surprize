import React, { useEffect } from "react";
import image from "../assets/Argentina.jpg";

const Forth = ({ count, setCount }) => {
  useEffect(() => {
    setTimeout(() => {
      setCount(count + 1);
    }, 5000);
  });
  return (
    <div className="main">
      <div className="text">
        <p>Independence day of Argentina .....</p>
        <img src={image} alt="" />
        <p>Happy Independence Day </p>
      </div>
    </div>
  );
};

export default Forth;
