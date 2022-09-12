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
  episode,
}: IModal) => {
  const addToFavorite = () => {
    const apiURL = `https://rickandmortyapi.com/api/character/${id}`;
    axios.get(apiURL).then((res) => {
      let data = res.data;
      if (!localStorage.getItem('favorite')) {
        localStorage.setItem('favorite', JSON.stringify([data]));
      } else {
        const sameItem = JSON.parse(
          localStorage.getItem('favorite') || '[]'
        ).some((item: { id: number }) => item.id === data.id);
        if (sameItem) {
          alert('Character already added');
          return;
        }
        localStorage.setItem(
          'favorite',
          JSON.stringify([
            ...JSON.parse(localStorage.getItem('favorite') || '[]'),
            data,
          ])
        );
        alert('Added to favorite');
      }
    });
  };
  const removeFromFavorite = (id: string | undefined) => {
    const newData = JSON.parse(localStorage.getItem('favorite') || '[]').filter(
      (item: { id: string | undefined }) => item.id !== id
    );
    localStorage.setItem('favorite', JSON.stringify(newData));
    setFavorite?.(JSON.parse(localStorage.getItem('favorite') || '[]'));
  };

  return (
    <div className="modal">
      <main className="modal__main">
        <button className="modal__main--close" onClick={() => openModal(false)}>
          X
        </button>
        <section className="modal__main--info">
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
        </section>
        <hr />
        <h2>Episodes appeared</h2>
        <section className="modal__main--episodes">
          {episode?.map((item) => {
            const splittedURL: string[] = item.split('/');
            const episode = `${splittedURL[splittedURL.length - 2]} ${
              splittedURL[splittedURL.length - 1]
            }`;
            return <p key={episode}>{episode}</p>;
          })}
        </section>
      </main>
    </div>
  );
};

export default Modal;
