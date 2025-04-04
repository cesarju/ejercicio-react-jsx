import "./App.css";
import { Header } from "./components/Header";
import { ListCard } from "./components/ListCard";
import { ThemeContextProvider } from "./components/ThemeContextProvider";
import { getAllPets } from "./data";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    getAllPets().then((pet) => setData(pet));
  }, []);

  if (!data) {
    return <h1>Loading...</h1>;
  }

  return (
    <ThemeContextProvider>
      <Header isLoggedIn={true} rol="Admin" />
      <ListCard list={data} />
    </ThemeContextProvider>
  );
}

export default App;
