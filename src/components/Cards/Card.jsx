import React, { useState, useEffect } from 'react';
import Modal from '../Modals/Modal';
import './card.css';

const Card = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrollingDisabled, setScrollingDisabled] = useState(false);

  const openModal = (open) => {
    setIsModalOpen(open);
    setScrollingDisabled(open);
  };

  //to prevent modal scrolling
  useEffect(() => {
    scrollingDisabled
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'auto');
  }, [scrollingDisabled]);

  const openModalHandler = () => openModal(true);

  return (
    <>
      <figure onClick={openModalHandler} className="card">
        <img src={props.image} alt={props.name} />
        <figcaption className="card__desc">{props.name}</figcaption>
      </figure>
      {isModalOpen && (
        <Modal {...props} openModal={openModal} isModalOpen={isModalOpen} />
      )}
    </>
  );
};

export default Card;