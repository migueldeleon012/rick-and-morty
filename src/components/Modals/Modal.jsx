import './modal.css';

const Modal = ({
  openModal,
  image,
  name,
  species,
  gender,
  origin,
  location,
}) => {
  return (
    <div className="modal">
      <main className="modal__main">
        <button className="modal__main--btn" onClick={() => openModal(false)}>
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
        </div>
      </main>
    </div>
  );
};

export default Modal;
