import './navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="nav">
      <h1>Rick and Morty Wiki</h1>
      <div className="nav__links">
        <Link to="/">Main Page</Link>
        <Link to="/favorite">Favorite</Link>
      </div>
    </nav>
  );
};

export default Navbar;
