import './searchbar.css';

const Searchbar = ({
  searchInput,
  setSearchInput,
  setCurrentPage,
  setMaxPageLimit,
  setMinPageLimit,
}) => {
  const setInputHandler = (e) => {
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
