import "./App.css";
import { Header, ListCard } from "./components/Header";
import Card from "./components/Card";

function App() {
  return (
    <>
      <Header isLoggedIn={true} />
      {/* <ListCard /> */}
      {/* <Header isLoggedIn={true} /> */}
      <Card
        nombre="Max"
        raza="Chucho"
        edad={7}
        image="https://content.elmueble.com/medio/2023/05/25/cachorro-de-bichon-maltes_61209cca_230525143331_1000x1500.jpg"
        enAdopcion={true}
      />
      <Card
        nombre="Max"
        raza="Chucho"
        edad={7}
        image="https://content.elmueble.com/medio/2023/05/25/cachorro-de-bichon-maltes_61209cca_230525143331_1000x1500.jpg"
        enAdopcion={false}
        fecha={"01-01-2025"}
      />
      <Card
        nombre="Max"
        raza="Chucho"
        edad={7}
        image="https://content.elmueble.com/medio/2023/05/25/cachorro-de-bichon-maltes_61209cca_230525143331_1000x1500.jpg"
        enAdopcion={true}
      />
    </>
  );
}

export default App;
