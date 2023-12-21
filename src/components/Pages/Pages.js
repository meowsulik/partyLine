import React from "react";
import Header from "../Header/Header";
import s from "./Pages.module.css"; // Импорт стилей
import Sidebar from "../Sidebar/Sidebar";

const Pages = () => {
  return (
    <div className={s.main__wrap}>
      <div className={s.sidebar}>
        <Sidebar />
      </div>
      <div className={s.title__wrap}>
        <Header />
        <section className={s.header__pages}>
          <div className="container">
            <div className={s.aboutus__pages}>
              <h2>Console Pages</h2>
              <div className="row">
                <div className="col-3 aboutus__page">
                  <div className={s.aboutus__pages__photo}>
                    <img
                      src="https://images.console.xyz/cdn-cgi/image/width=206,height=206,fit=crop,quality=75,dpr=2/https://console-prod-static-back.s3.amazonaws.com/media/Web%201920%20%E2%80%93%207_.png"
                      alt="Welcome to Console.xyz cover"
                    ></img>
                  </div>
                  <div className={s.aboutus__pages__text}>
                    <p>Welcome to Console.xyz</p>
                  </div>
                </div>
                <div className="col-3 aboutus__page">
                  <div className={s.aboutus__pages__photo}>
                    <img
                      src="https://images.console.xyz/cdn-cgi/image/width=206,height=206,fit=crop,quality=75,dpr=2/https://console-prod-static-back.s3.amazonaws.com/media/Web%201920%20%E2%80%93%207_.png"
                      alt="Welcome to Console.xyz cover"
                    ></img>
                  </div>
                  <div className={s.aboutus__pages__text}>
                    <p>Welcome to Console.xyz</p>
                  </div>
                </div>
                <div className="col-3 aboutus__page">
                  <div className={s.aboutus__pages__photo}>
                    <img
                      src="https://images.console.xyz/cdn-cgi/image/width=206,height=206,fit=crop,quality=75,dpr=2/https://console-prod-static-back.s3.amazonaws.com/media/Web%201920%20%E2%80%93%207_.png"
                      alt="Welcome to Console.xyz cover"
                    ></img>
                  </div>
                  <div className={s.aboutus__pages__text}>
                    <p>Welcome to Console.xyz</p>
                  </div>
                </div>
                <div className="col-3 aboutus__page">
                  <div className={s.aboutus__pages__photo}>
                    <img
                      src="https://images.console.xyz/cdn-cgi/image/width=206,height=206,fit=crop,quality=75,dpr=2/https://console-prod-static-back.s3.amazonaws.com/media/Web%201920%20%E2%80%93%207_.png"
                      alt="Welcome to Console.xyz cover"
                    ></img>
                  </div>
                  <div className={s.aboutus__pages__text}>
                    <p>Welcome to Console.xyz</p>
                  </div>
                </div>
                <div className="col-3 aboutus__page">
                  <div className={s.aboutus__pages__photo}>
                    <img
                      src="https://images.console.xyz/cdn-cgi/image/width=206,height=206,fit=crop,quality=75,dpr=2/https://console-prod-static-back.s3.amazonaws.com/media/Web%201920%20%E2%80%93%207_.png"
                      alt="Welcome to Console.xyz cover"
                    ></img>
                  </div>
                  <div className={s.aboutus__pages__text}>
                    <p>Welcome to Console.xyz</p>
                  </div>
                </div>
                <div className="col-3 aboutus__page">
                  <div className={s.aboutus__pages__photo}>
                    <img
                      src="https://images.console.xyz/cdn-cgi/image/width=206,height=206,fit=crop,quality=75,dpr=2/https://console-prod-static-back.s3.amazonaws.com/media/Web%201920%20%E2%80%93%207_.png"
                      alt="Welcome to Console.xyz cover"
                    ></img>
                  </div>
                  <div className={s.aboutus__pages__text}>
                    <p>Welcome to Console.xyz</p>
                  </div>
                </div>
                <div className="col-3 aboutus__page">
                  <div className={s.aboutus__pages__photo}>
                    <img
                      src="https://images.console.xyz/cdn-cgi/image/width=206,height=206,fit=crop,quality=75,dpr=2/https://console-prod-static-back.s3.amazonaws.com/media/Web%201920%20%E2%80%93%207_.png"
                      alt="Welcome to Console.xyz cover"
                    ></img>
                  </div>
                  <div className={s.aboutus__pages__text}>
                    <p>Welcome to Console.xyz</p>
                  </div>
                </div>
              </div>
            </div>
            <h2 className={s.page__text__videos}>Videos</h2>
            <div className="col aboutus__page">
              <div className={s.aboutus__pages__photo}>
                <img
                  src="https://images.console.xyz/cdn-cgi/image/width=206,height=206,fit=crop,quality=75,dpr=2/https://console-prod-static-back.s3.amazonaws.com/media/Web%201920%20%E2%80%93%207_.png"
                  alt="Welcome to Console.xyz cover"
                ></img>
              </div>
              <div className={s.aboutus__pages__text}>
                <p>Welcome to Console.xyz</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Pages;
