// Sidebar.js
import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="App">
      <div className="wrap">
        <div className="main__wrap">
          <div className="box1">
            <div className="button__wrap">
              <img
                alt="avatar"
                src="https://images.console.xyz/cdn-cgi/image/width=252,height=252,fit=crop,quality=75,dpr=1/https://console-prod-static-back.s3.amazonaws.com/media/AA731851-790F-4BD3-8EAB-D47B6D17613B.png"
                draggable="false"
                className="sc-koXPp caCvie"
              />
              <p>Party Line💜</p>
              <div className="updown__arrow">
                <svg
                  width="8"
                  height="12"
                  viewBox="0 0 8 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <svg
                    width="8"
                    height="12"
                    viewBox="0 0 8 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.68681 7.80229C1.49154 7.60703 1.17496 7.60703 0.979698 7.80229C0.784436 7.99755 0.784436 8.31413 0.979698 8.5094L3.64637 11.1761C3.84163 11.3713 4.15821 11.3713 4.35347 11.1761L7.02014 8.5094C7.2154 8.31413 7.2154 7.99755 7.02014 7.80229C6.82488 7.60703 6.50829 7.60703 6.31303 7.80229L3.99992 10.1154L1.68681 7.80229Z"
                      fill="white"
                      fill-opacity="0.96"
                    ></path>
                    <path
                      d="M0.979698 3.49044C0.784436 3.6857 0.784436 4.00229 0.979698 4.19755C1.17496 4.39281 1.49154 4.39281 1.68681 4.19755L3.99992 1.88443L6.31303 4.19755C6.50829 4.39281 6.82488 4.39281 7.02014 4.19755C7.2154 4.00229 7.2154 3.6857 7.02014 3.49044L4.35347 0.823773C4.15821 0.628511 3.84163 0.628511 3.64636 0.823773L0.979698 3.49044Z"
                      fill="white"
                      fill-opacity="0.96"
                    ></path>
                  </svg>
                </svg>
              </div>
            </div>
            <div className="box2">
              <div className="nav__wrap">
                <Link to="/">
                  <p>Home</p>
                </Link>
              </div>
              <div className="nav__wrap">
                <Link to="/chat">
                  <p>Chat</p>
                </Link>
              </div>
              <div className="nav__wrap">
                <Link to="/people">
                  <p>People</p>
                </Link>
              </div>
            </div>
            <div className="box3">
              <div className="direct__wrap">
                <Link to="/direct">
                  <p>Direct Messages</p>
                </Link>
              </div>
            </div>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
