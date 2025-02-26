const Card = ({ nombre, raza, edad, enAdopcion, donar, image }) => {
  return (
    <>
      <h3>Nombre: {nombre}</h3>
      <img src={image} alt="" width={150} />
      <p>Raza: {raza}</p>
      <p>Edad: {edad} meses</p>
      {enAdopcion ? "Adoptame 😔" : "Ya tengo un hogar 🏠"}
      {donar && <button>Pasarela de pagos 💳</button>}
    </>
  );
};

export default Card;
