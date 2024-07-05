import React, { useEffect, useState } from "react";
import ananyaFace from "../assets/ananyaFace.png";
import happyBirthday from "../assets/HappyBirthday.png";
import photo1 from "../assets/Photo1.png";
import photo2 from "../assets/photo2.png";
import photo3 from "../assets/photo3.png";
import photo4 from "../assets/photo4.png";
import photo5 from "../assets/photo5.png";
import photo6 from "../assets/photo6.png";

const Sixth = ({ count, setCount }) => {
  const [photo, setPhoto] = useState(1);

  const changeState = () => {
    if (photo == 6) {
      setPhoto(1);
    } else {
      setPhoto(photo + 1);
    }
  };

  useEffect(() => {
    const timer = setTimeout(changeState, 3000);
    return () => clearTimeout(timer);
  }, [photo]);
  return (
    <div className="main">
      <div>
        <div className="hbdLogoDiv">
          <div>
            <img src={ananyaFace} className="face" alt="" />
          </div>
          <div>
            <img src={happyBirthday} className="logo" alt="" />
          </div>
          <div>
            <img src={ananyaFace} className="face" alt="" />
          </div>
        </div>
        <div className="photoDiv">
          <img
            src={
              photo == 1
                ? photo1
                : photo == 2
                ? photo2
                : photo == 3
                ? photo3
                : photo == 4
                ? photo4
                : photo == 5
                ? photo5
                : photo == 6
                ? photo6
                : null
            }
            alt=""
          />
        </div>
        <div className="hbdTextDiv">
          <p className="hbdText">
            Wow, 16 years of putting up with each other since we first met as
            9-year-olds back in 2008! Can you believe it? On this special day, I
            want to celebrate not only your birthday but also our incredible
            journey of friendship. We've shared countless laughs, survived epic
            misadventures, and have enough inside jokes to fill a book.
          </p>
          <p className="hbdText"> I still remember us playing in the school’s playground when we were just 10 years old.</p>
          <p className="hbdText">
            Today, let's celebrate you—the amazing, hilarious, and slightly
            weird (in the best way possible) person you are. You light up every
            room with your infectious laugh and always know how to make even the
            dullest moments unforgettable.
          </p>
          <p className="hbdText">
            So here’s to another year of questionable decisions, uncontrollable
            laughter, and the best friendship ever. Happy birthday, my dear
            friend! May your day be filled with as much joy and craziness as you
            bring into my life every day.
          </p>
          <p className="hbdText">
            With all my love and a whole lot of laughter,
          </p>
          <p className="hbdText"><span style={{color: "red"}}>&#10100;</span> upar saara bakwaas chat gpt diya hai isme mera yogdaan bahut km hai <span style={{color: "red"}}>&#10101;</span></p>
          <p className="hbdTextEnd">From one of your smartest friends &#128526; - <span>Mihir</span></p>
          <p>Aaj hi hai nn waise &#128580;&#128580;</p>
        </div>
        <div className="hbdLogoDiv">
          <div>
            <img src={ananyaFace} className="face" alt="" />
          </div>
          <div>
            <img src={happyBirthday} className="logo" alt="" />
          </div>
          <div>
            <img src={ananyaFace} className="face" alt="" />
          </div>
        </div>
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

export default Sixth;
