import "./App.css";
import { Header } from "./components/Header";
import Card from "./components/Card";
import { ListCard } from "./components/ListCard";
import { data } from "./data";

function App() {
  return (
    <>
      <Header isLoggedIn={true} rol="Admin" />
      <ListCard list={data} />
    </>
  );
}

export default App;
