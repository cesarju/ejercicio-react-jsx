const Card = ({ nombre, raza, edad, enAdopcion, image, fecha }) => {
  return (
    <>
      <h3>Nombre: {nombre}</h3>
      <img src={image} alt="" width={150} />
      <p>Raza: {raza}</p>
      <p>Edad: {edad} meses</p>
      {enAdopcion ? (
        <button>"Adoptame 😔"</button>
      ) : (
        <div>
          <h4>"Ya tengo un hogar 🏠 "</h4>
          <p>{fecha}</p>
        </div>
      )}
      {enAdopcion && <button>Pasarela de pagos 💳</button>}
    </>
  );
};

export default Card;
