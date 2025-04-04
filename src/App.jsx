import "./App.css";
import { Header } from "./components/Header";
import { ListCard } from "./components/ListCard";
import { ThemeContextProvider } from "./components/ThemeContextProvider";
import About from "./pages/About";
import { Donations } from "./pages/Donations";
import { getAllPets } from "./data";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
    <Router>
      <ThemeContextProvider>
        <Header isLoggedIn={true} rol="Admin" />
        <Routes>
          <Route path="/" element={<ListCard list={data} />} />
          <Route path="/donations/:id" element={<Donations />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </ThemeContextProvider>
    </Router>
  );
}

export default App;
