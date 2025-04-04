import "./App.css";
import { Header } from "./components/Header";
import { ListCard } from "./components/ListCard";
import { ThemeContextProvider } from "./components/ThemeContextProvider";
import { getAllPets } from "./data";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import { Donations } from "./pages/Donations";

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
      <BrowserRouter>
        <Header isLoggedIn={true} rol="Admin" />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/listPets" element={<ListCard list={data} />} />
          <Route path="/donation/:idP" element={<Donations />} />
          <Route path="*" element={<h1>Error 404</h1>} />
        </Routes>
      </BrowserRouter>
    </ThemeContextProvider>
  );
}

export default App;
