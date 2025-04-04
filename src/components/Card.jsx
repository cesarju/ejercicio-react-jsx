import "./card.css";

const Card = ({
  nombre,
  raza,
  edad,
  enAdopcion,
  image,
  fecha,
  id,
  onClickDetails,
}) => {
  const handleClickName = (nombre) => {
    onClickDetails(nombre);
  };

  return (
    <div className="card">
      <img src={image} alt={nombre} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{nombre}</h3>
        <p className="card-text">
          <strong>Raza:</strong> {raza}
        </p>
        <p className="card-text">
          <strong>Edad:</strong> {edad} meses
        </p>
        {enAdopcion ? (
          <button
            className="card-button adopt-button"
            onClick={() => handleClickName(nombre)}
          >
            Adóptame 😔
          </button>
        ) : (
          <div className="adopted-message">
            <h4 className="card-text">¡Ya tengo un hogar! 🏠</h4>
            <p className="card-text">
              <strong>Fecha de adopción:</strong> {fecha}
            </p>
          </div>
        )}
        {enAdopcion && (
          <button className="card-button payment-button">Donar 💳</button>
        )}
      </div>
    </div>
  );
};

export default Card;
