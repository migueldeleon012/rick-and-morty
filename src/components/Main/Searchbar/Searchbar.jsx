import './searchbar.css';

const Searchbar = ({ searchInput, setSearchInput }) => {
  const setInputHandler = (e) => setSearchInput(e.target.value);

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
