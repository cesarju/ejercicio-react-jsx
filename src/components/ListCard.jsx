import Card from "./Card";

const ListCard = ({ list }) => {
  () => {
    return "";
  };

  const handleDetail = (nombre) => {
    const des = list.find((e) => e.nombre === nombre);
    console.log(des);
    alert(des.descripcion);
  };

  return (
    <div style={{ display: "flex" }}>
      {list.map((item, index) => {
        // console.log(crypto.randomUUID());
        //
        //
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
  );
};

export { ListCard };
