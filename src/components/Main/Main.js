import React from "react";
import s from "./Main.module.css";

const Main = () => {
  return (
    <>
      <div className={s.main}>
        <div className="container">
          <div className={s.partyline}>
            <div className={s.partyline__box__photo}>
              <img
                alt="avatar"
                src="https://images.console.xyz/cdn-cgi/image/width=252,height=252,fit=crop,quality=75,dpr=2/https://console-prod-static-back.s3.amazonaws.com/media/AA731851-790F-4BD3-8EAB-D47B6D17613B.png"
                draggable="false"
              ></img>
            </div>
            <div className={s.partyline__box__content}>
              <h1>Party Line 💜</h1>
              <p>
                Our demo community. 💜 Ask questions, meet other community
                leaders, and learn how to start your own Console community. ✨
              </p>
              <div className={s.partyline__grayline}></div>
              <nav className={s.partyline__nav}>
                <button className={s.partyline__btn}>
                  <span>Joined</span>
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
