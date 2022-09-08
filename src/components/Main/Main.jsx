import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Cards/Card';
import Searchbar from './Searchbar/Searchbar';
import Pagination from './Pagination/Pagination';
import './main.css';

const List = () => {
  const [currentDataResults, setCurrentDataResults] = useState([]);
  const [currentDataInfo, setCurrentDataInfo] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  let apiURL = `https://rickandmortyapi.com/api/character/?page=${currentPage}&name=${searchInput}`;

  useEffect(() => {
    axios.get(apiURL).then((res) => {
      setCurrentDataResults(res.data.results);
      setCurrentDataInfo(res.data.info);
    });
  }, [apiURL]);

  return (
    <section className="main">
      <Searchbar setSearchInput={setSearchInput} searchInput={searchInput} />
      <main className="main__list">
        {currentDataResults.map((item) => (
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
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        currentDataInfo={currentDataInfo}
      />
    </section>
  );
};

export default List;
