import { Link } from 'react-router-dom';
import { useState } from 'react';
import './navbar.css';

const Navbar = () => {
  const [navbarActive, setNavbarActive] = useState(false);

  const setNavbar = () => setNavbarActive((prev) => !prev);

  return (
    <nav className={navbarActive ? 'nav active' : 'nav'}>
      <main className="nav__container">
        <h1>Rick and Morty Wiki</h1>
        <div className="nav__links">
          <Link to="/">Main Page</Link>
          <Link to="/favorite">Favorite</Link>
        </div>
        <div onClick={setNavbar} className="hamburger">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </main>
    </nav>
  );
};

export default Navbar;
