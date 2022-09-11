import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Homepage from './pages/Homepage/Homepage';
import Favorite from './pages/Favorite/Favorite';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="main-container">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/favorite" element={<Favorite />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
