import './modal.css';

const Modal = (props) => {
  console.log(props);

  return (
    <div>
      <img src={props.image} alt={`Image: ${props.name}`} />
      <main>
        <p>{props.name}</p>
        <p>{props.species}</p>
        <p>{props.gender}</p>
        <p>{props.origin}</p>
        <p>{props.location}</p>
      </main>
    </div>
  );
};

export default Modal;
