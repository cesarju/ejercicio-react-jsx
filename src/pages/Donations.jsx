import React, { useEffect, useState } from "react";
import { getPetDetails } from "../data";
import { useParams } from "react-router-dom";

const Donations = () => {
  const [pet, setPet] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");

  const { idP } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `¡Gracias, ${name}! Tu donación de $${amount} ha sido recibida para ayudar a ${pet?.nombre}.`
    );
    setName("");
    setEmail("");
    setAmount("");
  };

  useEffect(() => {
    getPetDetails(Number(idP)).then((data) => setPet(data));
  }, []);

  console.log(idP);

  if (!pet) {
    return <h2>Loading...</h2>;
  }

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Donaciones</h1>
      <p>
        Tu apoyo es fundamental para continuar ayudando a los animalitos que más
        lo necesitan. ¡Gracias por tu generosidad!
      </p>

      <div
        style={{
          marginBottom: "20px",
          border: "1px solid #ccc",
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        <h2>Información del Animalito</h2>
        <img
          src={pet.image}
          alt={pet.nombre}
          style={{
            width: "200px",
            height: "200px",
            objectFit: "cover",
            borderRadius: "10px",
          }}
        />
        <p>
          <strong>Nombre:</strong> {pet.nombre}
        </p>
        <p>
          <strong>Raza:</strong> {pet.raza}
        </p>
        <p>
          <strong>Edad:</strong> {pet.edad} años
        </p>
        <p>
          <strong>Estado de Salud:</strong> {pet.estadoSalud}
        </p>
        <p>
          <strong>Descripción:</strong> {pet.descripcion}
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        style={{ maxWidth: "400px", margin: "0 auto" }}
      >
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="amount">Monto de la Donación ($):</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>
        <button
          type="submit"
          style={{
            backgroundColor: "#4CAF50",
            color: "white",
            padding: "10px 20px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Donar
        </button>
      </form>
    </div>
  );
};

export { Donations };
