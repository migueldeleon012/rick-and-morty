import './modal.css';

const Modal = (props) => {
  return (
    <div className="modal" onClick={() => props.openModal(false)}>
      <main className="modal__main">
        <button className="modal__main--btn">X</button>
        <img src={props.image} alt={`${props.name}`} />
        <div className="modal__main--text">
          <h2>{props.name}</h2>
          <p>Species: {props.species}</p>
          <p>Gender: {props.gender}</p>
          <p>Origin: {props.origin}</p>
          <p>Location: {props.location}</p>
        </div>
      </main>
    </div>
  );
};

export default Modal;
