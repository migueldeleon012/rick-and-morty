import React, { useState, useEffect } from 'react';
import Card from '../../components/Cards/Card';
import './favorite.css';

const Favorite = () => {
  const [favorites, setFavorite] = useState<any[]>([]);

  useEffect(() => {
    const favoriteLocalStorage = JSON.parse(
      localStorage.getItem('favorite') || '[]'
    );
    favoriteLocalStorage
      ? setFavorite(JSON.parse(localStorage.getItem('favorite') || '[]'))
      : setFavorite([]);
  }, []);

  return (
    <main className="favorite">
      {!favorites.length ? (
        <h2>No favorites selected</h2>
      ) : (
        favorites.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            species={item.species}
            gender={item.gender}
            origin={item.origin.name}
            location={item.location.name}
            fromFavorite={true}
            favorite={favorites}
            setFavorite={setFavorite}
            episode={item.episode}
          />
        ))
      )}
    </main>
  );
};

export default Favorite;
