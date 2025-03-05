import "./App.css";
import { Counter } from "./components/Counter";
import { Header } from "./components/Header";
import { ListCard } from "./components/ListCard";
import { FetchApi } from "./components/FetchApi";
import { data } from "./data";

function App() {
  return (
    <>
      <Header isLoggedIn={true} rol="Admin" />
      {/* <Counter /> */}
      <FetchApi />
      <ListCard list={data} />
    </>
  );
}

export default App;
