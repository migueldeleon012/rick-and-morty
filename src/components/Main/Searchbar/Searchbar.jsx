import './searchbar.css';

const Searchbar = ({ searchInput, setSearchInput }) => {
  return (
    <section className="searcbar">
      <div className="searchbar__container">
        <input
          type="text"
          placeholder="Search character..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>
    </section>
  );
};

export default Searchbar;
