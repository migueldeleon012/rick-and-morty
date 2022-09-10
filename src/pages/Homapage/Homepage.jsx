import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../../components/Cards/Card';
import Searchbar from '../../components/Searchbar/Searchbar';
import Pagination from '../../components/Pagination/Pagination';
import './homepage.css';

const List = () => {
  const [currentDataResults, setCurrentDataResults] = useState([]);
  const [currentDataInfo, setCurrentDataInfo] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPageLimit, setMaxPageLimit] = useState(5);
  const [minPageLimit, setMinPageLimit] = useState(0);

  let apiURL = `https://rickandmortyapi.com/api/character/?page=${currentPage}&name=${searchInput}`;

  useEffect(() => {
    axios.get(apiURL).then((res) => {
      setCurrentDataResults(res.data.results);
      setCurrentDataInfo(res.data.info);
    });
  }, [apiURL]);

  return (
    <section className="main">
      <Searchbar
        setSearchInput={setSearchInput}
        searchInput={searchInput}
        setCurrentPage={setCurrentPage}
        setMaxPageLimit={setMaxPageLimit}
        setMinPageLimit={setMinPageLimit}
      />
      <main className="main__list">
        {currentDataResults.map((item) => (
          <Card
            key={item.id}
            id={item.id}
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
        maxPageLimit={maxPageLimit}
        setMaxPageLimit={setMaxPageLimit}
        minPageLimit={minPageLimit}
        setMinPageLimit={setMinPageLimit}
      />
    </section>
  );
};

export default List;
