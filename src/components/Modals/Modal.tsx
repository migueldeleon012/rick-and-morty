import React from 'react';
import axios from 'axios';
import { IModal } from './interfaces';
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
}: IModal) => {
  const addToFavorite = () => {
    const apiURL = `https://rickandmortyapi.com/api/character/${id}`;
    axios.get(apiURL).then((res) => {
      let data = res.data;
      if (!localStorage.getItem('favirote') || '{}') {
        localStorage.setItem('favorite', JSON.stringify([data]));
      } else {
        const sameItem = JSON.parse(
          localStorage.getItem('favirote') || '{}'
        ).some((item: { id: number }) => item.id === data.id);
        sameItem
          ? alert('Character already added')
          : localStorage.setItem(
              'favorite',
              JSON.stringify([
                ...JSON.parse(localStorage.getItem('favirote') || '{}'),
                data,
              ])
            );
      }
    });
  };
  const removeFromFavorite = (id: string | undefined) => {
    const newData = JSON.parse(localStorage.getItem('favorite') || '{}').filter(
      (item: { id: string | undefined }) => item.id !== id
    );
    localStorage.setItem('favorite', JSON.stringify(newData));
    setFavorite?.(JSON.parse(localStorage.getItem('favirote') || '{}'));
  };

  return (
    <div className="modal">
      <main className="modal__main">
        <button className="modal__main--close" onClick={() => openModal(false)}>
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
            <button
              className="modal__main--btn remove"
              onClick={() => removeFromFavorite(id)}
            >
              Remove from favorite
            </button>
          ) : (
            <button className="modal__main--btn add" onClick={addToFavorite}>
              Add to favorite
            </button>
          )}
        </div>
      </main>
    </div>
  );
};

export default Modal;
