import Card from './Cards/Card';
import { useState, useEffect } from 'react';
import axios from 'axios';

const List = () => {
  let [currentPage, setCurrentPage] = useState(1);
  let [currentData, setCurrentData] = useState([]);
  let apiURL = `https://rickandmortyapi.com/api/character/?page=${currentPage}`;

  useEffect(() => {
    axios.get(apiURL).then((res) => setCurrentData(res.data.results));
  }, [apiURL]);

  return (
    <main>
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
  );
};

export default List;
