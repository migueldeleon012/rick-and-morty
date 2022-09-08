import './navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <h1>Rick and Morty Wiki</h1>
      <Link to="/">Main Page</Link>
      <Link to="/favorite">Favorite</Link>
    </nav>
  );
};

export default Navbar;
