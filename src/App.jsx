import "./App.css";
import { Counter } from "./components/Counter";
import { Header } from "./components/Header";
import { ListCard } from "./components/ListCard";
import { data } from "./data";

function App() {
  return (
    <>
      <Header isLoggedIn={true} rol="Admin" />
      <h3>Clase hooks - useState</h3>
      {/* <Counter /> */}
      <ListCard list={data} />
    </>
  );
}

export default App;
