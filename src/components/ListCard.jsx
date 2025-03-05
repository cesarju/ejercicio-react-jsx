import { useState } from "react";
import Card from "./Card";

const ListCard = ({ list }) => {
  const [text, setText] = useState("");
  const [raza, setRaza] = useState("");
  const [edad, setEdad] = useState(0);
  const [listData, setListData] = useState(list);
  const handleDetail = (nombre) => {
    const des = list.find((e) => e.nombre === nombre);
    console.log(des);
    alert(des.descripcion);
  };

  const handleAddItem = () => {
    const newItem = {
      nombre: text,
      raza: raza,
      edad: edad,
      enAdopcion: true,
    };
    setListData([...listData, newItem]);
  };

  return (
    <>
      <h3>Clase hooks - useState</h3>

      <div>
        <input
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <input
          type="text"
          value={raza}
          onChange={(e) => {
            setRaza(e.target.value);
          }}
        />
        <input
          type="text"
          value={edad}
          onChange={(e) => {
            setEdad(e.target.value);
          }}
        />
        <button className="payment-button" onClick={handleAddItem}>
          Add
        </button>
      </div>
      <div style={{ display: "flex" }}>
        {listData.map((item) => {
          return (
            <Card
              key={crypto.randomUUID()}
              nombre={item.nombre}
              raza={item.raza}
              edad={item.edad}
              image={item.image}
              enAdopcion={item.enAdopcion}
              onClickDetails={handleDetail}
            />
          );
        })}
      </div>
    </>
  );
};

export { ListCard };
