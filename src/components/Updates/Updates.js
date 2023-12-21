import React from "react";
import style from "./Updates.module.css";
import ChatSidebar from "../ChatSidebar/ChatSidebar";

const Updates = () => {
  return (
    <div className={style.main__wrap}>
      <div className={style.sidebar}>
        <ChatSidebar />
      </div>
      <div className={style}></div>
    </div>
  );
};

export default Updates;
