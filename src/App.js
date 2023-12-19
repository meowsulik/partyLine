import React from "react";
import Header from "./components/Header/Header";
import "./App.css";
import {
  BrowserRouter,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Main from "./components/Main/Main";
import Events from "./components/Events/Events";
import Pages from "./components/Pages/Pages";
import Sidebar from "./components/Sidebar/Sidebar";
import Chat from "./components/Chat/Chat";
import Home from "./components/Home/Home";
import People from "./components/People/People";
import DirectMessanges from "./components/DirectMessanges/DirectMessanges";

const App = () => {
  return (
    <div className="main__wrap">
      <BrowserRouter>
        <Sidebar />
        <div className="lolkek">
          {/* <Header /> */}
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/events" element={<Events />} />
            <Route path="/pages" element={<Pages />} />
            
            <Route path="/home" element={<Home />}>

              <Route path="activity" element={<Main />} />

            </Route>
            <Route path="/chat" element={<Chat />} />
            <Route path="/people" element={<People />} />
            <Route path="/direct" element={<DirectMessanges />} />            
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
