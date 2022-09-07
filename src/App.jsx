import Navbar from './components/Navbar/Navbar.jsx';
import Searchbar from './components/Searchbar/Searchbar.jsx';
import List from './components/List/List.jsx';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Searchbar />
      <List />
    </div>
  );
};

export default App;
