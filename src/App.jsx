import "./App.css";
import { Header } from "./components/Header";
import Card from "./components/Card";

function App() {
  return (
    <>
      <Header isLoggedIn={true} rol="Admin" />
      {/* <ListCard /> */}
      {/* <Header isLoggedIn={true} /> */}
      <div style={{ display: "flex" }}>
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
          image="https://imgs.search.brave.com/SXuyQfi9dlsHfc2vGWKBynbdVzynMALTzNbIg_xUDws/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/Zm90b3MtcHJlbWl1/bS9wZXJyaXRvc18y/MzE5NzQtMTguanBn/P3NlbXQ9YWlzX2h5/YnJpZA"
          enAdopcion={false}
          fecha={"01-01-2025"}
        />
        <Card
          nombre="Max"
          raza="Chucho"
          edad={7}
          image="https://imgs.search.brave.com/ufw2ISD9OWn64FUNeiHNfvhmq6x3uj52ilkpk5F23K0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvcHVw/cHktZG9nLXBpY3R1/cmVzLTQ0Z2ZxbmZk/MHJnb3VmbTIuanBn"
          enAdopcion={true}
        />
      </div>
    </>
  );
}

export default App;
