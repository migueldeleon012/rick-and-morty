import React, { useState, useEffect } from 'react';
import Card from '../../components/Cards/Card';
import './favorite.css';

const Favorite = () => {
  const [favorites, setFavorite] = useState<any[]>([]);

  useEffect(() => {
    const favoriteLocalStorage = typeof localStorage.getItem('favorite')
      ? JSON.parse(localStorage.getItem('favorite'))
      : null;
    favoriteLocalStorage
      ? setFavorite(JSON.parse(localStorage.getItem('favorite')))
      : setFavorite([]);
  }, []);

  return (
    <main className="favorite">
      {favorites.map((item) => (
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
        />
      ))}
    </main>
  );
};

export default Favorite;
