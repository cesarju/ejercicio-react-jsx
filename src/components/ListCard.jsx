import { useState } from "react";
import Card from "./Card";

const ListCard = ({ list }) => {
  const [text, setText] = useState("");
  const [listData, setListData] = useState(list);
  const handleDetail = (nombre) => {
    const des = list.find((e) => e.nombre === nombre);
    console.log(des);
    alert(des.descripcion);
  };

  const handleAddItem = () => {
    const newItem = {
      nombre: text,
      raza: "Labrador",
      edad: 3,
      enAdopcion: true,
    };
    setListData([...listData, newItem]);
  };

  return (
    <>
      <div>
        <input
          type="text"
          value={text}
          onChange={(e) => {
            console.log(e.target.value);
            setText(e.target.value);
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
