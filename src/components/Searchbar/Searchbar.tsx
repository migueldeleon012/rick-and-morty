import React from 'react';
import { ISearchbar } from './interfaces';
import './searchbar.css';

const Searchbar = ({
  searchInput,
  setSearchInput,
  setCurrentPage,
  setMaxPageLimit,
  setMinPageLimit,
}: ISearchbar) => {
  const setInputHandler = (e: any) => {
    setCurrentPage(1);
    setSearchInput(e.target.value);
    setMaxPageLimit(5);
    setMinPageLimit(0);
  };

  return (
    <section className="searcbar">
      <input
        type="text"
        placeholder="Search character..."
        value={searchInput}
        onChange={setInputHandler}
      />
    </section>
  );
};

export default Searchbar;
