import React from 'react';
import Modal from '../Modals/Modal';

const Card = (props) => {
  const openModal = () => console.log('clicked');

  return (
    <>
      <figure onClick={openModal}>
        <img src={props.image} alt={`Image: ${props.name}`} />
        <figcaption>
          <p>{props.name}</p>
        </figcaption>
      </figure>
      <Modal {...props} />
    </>
  );
};

export default Card;
