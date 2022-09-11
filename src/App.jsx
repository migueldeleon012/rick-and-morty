import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Homepage from './pages/Homapage/Homepage';
import Favorite from './pages/Favorite/Favorite';

const App = () => {
  return (
    <div className="App">
      <Navbar></Navbar>
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
