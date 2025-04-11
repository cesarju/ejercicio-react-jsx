import { useContext, useState } from "react";
import Card from "./Card";
import { ThemeContext } from "./ThemeContextProvider";

const ListCard = ({ list }) => {
  const [text, setText] = useState("");
  const [raza, setRaza] = useState("");
  const [edad, setEdad] = useState(0);
  const [listData, setListData] = useState(list);
  const handleDetail = (nombre) => {
    const des = list.find((e) => e.nombre === nombre);
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

  const { themeMode, setThemeMode } = useContext(ThemeContext);

  const theme = "container-" + themeMode;
  // console.log("container-" + themeMode);

  return (
    <div className={theme}>
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
              id={item.id}
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

      <button
        onClick={() => setThemeMode(themeMode === "light" ? "dark" : "light")}
      >
        Theme mode {themeMode === "light" ? "🌑" : "☀️"}
      </button>
    </div>
  );
};

export default ListCard;
