import Card from './Cards/Card';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Searchbar from './Searchbar/Searchbar';
import './main.css';

const List = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  let apiURL = `https://rickandmortyapi.com/api/character/?page=${currentPage}&name=${searchInput}`;

  useEffect(() => {
    axios.get(apiURL).then((res) => setCurrentData(res.data.results));
    setCurrentPage(1);
  }, [apiURL]);

  return (
    <section className="main">
      <Searchbar setSearchInput={setSearchInput} searchInput={searchInput} />
      <main className="main__list">
        {currentData.map((item) => (
          <Card
            key={item.id}
            name={item.name}
            species={item.species}
            gender={item.gender}
            origin={item.origin.name}
            location={item.location.name}
            image={item.image}
          />
        ))}
      </main>
    </section>
  );
};

export default List;
