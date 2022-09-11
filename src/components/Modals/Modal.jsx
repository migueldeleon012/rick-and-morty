import axios from 'axios';
import './modal.css';

const Modal = ({
  openModal,
  id,
  image,
  name,
  species,
  gender,
  origin,
  location,
  fromFavorite,
  setFavorite,
}) => {
  const addToFavorite = () => {
    const apiURL = `https://rickandmortyapi.com/api/character/${id}`;
    axios.get(apiURL).then((res) => {
      let data = res.data;
      if (!localStorage.getItem('favorite')) {
        localStorage.setItem('favorite', JSON.stringify([data]));
      } else {
        const sameItem = JSON.parse(localStorage.getItem('favorite')).some(
          (item) => item.id === data.id
        );
        sameItem
          ? alert('Character already added')
          : localStorage.setItem(
              'favorite',
              JSON.stringify([
                ...JSON.parse(localStorage.getItem('favorite')),
                data,
              ])
            );
      }
    });
  };
  const removeFromFavorite = (id) => {
    const newData = JSON.parse(localStorage.getItem('favorite')).filter(
      (item) => item.id !== id
    );
    localStorage.setItem('favorite', JSON.stringify(newData));
    setFavorite(JSON.parse(localStorage.getItem('favorite')));
  };

  return (
    <div className="modal">
      <main className="modal__main">
        <button
          className="modal__main--close-button"
          onClick={() => openModal(false)}
        >
          X
        </button>
        <img src={image} alt={`${name}`} />
        <div className="modal__main--text">
          <h2>{name}</h2>
          <p>
            <strong>Species:</strong> {species}
          </p>
          <p>
            <strong>Gender:</strong> {gender}
          </p>
          <p>
            <strong>Origin:</strong> {origin}
          </p>
          <p>
            <strong>Location:</strong> {location}
          </p>
          {fromFavorite ? (
            <button onClick={() => removeFromFavorite(id)}>
              Remove from favorite
            </button>
          ) : (
            <button onClick={addToFavorite}>Add to favorite</button>
          )}
        </div>
      </main>
    </div>
  );
};

export default Modal;
