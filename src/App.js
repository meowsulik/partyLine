// App.js
import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import './App.css';
import Chat from './components/Chat/Chat';
import Home from './components/Home/Home';
import People from './components/People/People';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DirectMessanges from './components/DirectMessanges/DirectMessanges';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/people" element={<People />} />
          <Route path="/direct" element={<DirectMessanges />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
