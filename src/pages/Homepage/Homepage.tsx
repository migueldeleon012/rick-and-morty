import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../../components/Cards/Card';
import Searchbar from '../../components/Searchbar/Searchbar';
import Pagination from '../../components/Pagination/Pagination';
import { ICurrentDataInfo } from './interfaces';
import './homepage.css';

const List = () => {
  const [currentDataResults, setCurrentDataResults] = useState<any[]>([]);
  const [currentDataInfo, setCurrentDataInfo] = useState<ICurrentDataInfo>({});
  const [searchInput, setSearchInput] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [maxPageLimit, setMaxPageLimit] = useState<number>(5);
  const [minPageLimit, setMinPageLimit] = useState<number>(0);

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
            episode={item.episode}
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
