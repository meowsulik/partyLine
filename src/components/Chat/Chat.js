import React from "react";
import ChatSIdebar from "../ChatSidebar/ChatSidebar";
import style from "./Chat.module.css";
import { Link, Outlet } from "react-router-dom";

const Chat = () => {
  return (
    <div className={style.main__wrap}>
      <ChatSIdebar />
      <div className={style.content__wrap}>
        <div className={style.chat__wrap}>
          <div className={style.chat__wrapHeader}>
            <p>Chat</p>
          </div>
          <Link className={style.link} to="/updates">
            <p>@ Updates</p>
          </Link>
          <div className={style.community}>Community</div>
          <Link className={style.link} to="/general">
            <p>🏠</p>
            <p>general</p>
          </Link>
          <Link className={style.link} to="/announcements">
            <p>😘</p>
            <p>announcements</p>
          </Link>
          <Link className={style.link} to="/letsvote">
            <p>🗳️</p>
            <p>let's vote</p>
          </Link>
          <div className={style.chat__wrapFooter}>
            <p>Private</p>
          </div>
        </div>
        <div className={style.general}>
          <div className={style.header}>
            <div className={style.header__p}>
              <p>#general</p>
            </div>
            <div className={style.header__peopleCount}>
              <div className={style.peopleCount__wrap}>
                <img
                  alt="avatar"
                  src="https://api.dicebear.com/5.x/lorelei/svg?seed=alightBlue100&amp;backgroundColor=3399FF&amp;mouth=happy01,happy02,happy03,happy04,happy05,happy12,happy17,sad02"
                  draggable="false"
                  class="sc-hmdomO etWITa"
                />
                <img
                  alt="avatar"
                  src="https://api.dicebear.com/5.x/lorelei/svg?seed=alightTeal100&amp;backgroundColor=0CD7F2&amp;mouth=happy01,happy02,happy03,happy04,happy05,happy12,happy17,sad02"
                  draggable="false"
                  class="sc-hmdomO etWITa"
                ></img>
                <img
                  alt="avatar"
                  src="https://api.dicebear.com/5.x/lorelei/svg?seed=aalightOrange100&amp;backgroundColor=FF9C40&amp;mouth=happy01,happy02,happy03,happy04,happy05,happy12,happy17,sad02"
                  draggable="false"
                  class="sc-hmdomO etWITa"
                />
                <p>3156</p>
              </div>
            </div>
            <div className={style.avatar}>
              <img
                src="https://api.dicebear.com/5.x/lorelei/svg?seed=InfiniteWayfarer592lightBlue100&amp;backgroundColor=3399FF&amp;mouth=happy01,happy02,happy03,happy04,happy05,happy12,happy17,sad02"
                alt="avatar"
                draggable="false"
                className={style.header__avatar}
              />
              <p className={style.name__profile}>someoneprofile</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
