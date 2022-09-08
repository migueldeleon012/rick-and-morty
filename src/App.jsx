import './App.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import Main from './components/Main/Main.jsx';
import Favorite from './pages/Favorite/Favorite.jsx';

const App = () => {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/favorite" element={<Favorite />} />
      </Routes>
    </div>
  );
};

export default App;
