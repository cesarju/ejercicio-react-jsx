import "./App.css";
import { Counter } from "./components/Counter";
import { Header } from "./components/Header";
import { ListCard } from "./components/ListCard";
import { FetchApi } from "./components/FetchApi";
import { Reducer } from "./components/Reducer";
import { data } from "./data";
import { ThemeContextProvider } from "./components/ThemeContextProvider";
import { UseMemo } from "./components/UseMemo";
import { UseRef } from "./components/UseRef";

function App() {
  return (
    <>
      <ThemeContextProvider>
        <Header isLoggedIn={true} rol="Admin" />
        {/* <Counter /> */}
        {/* <FetchApi /> */}
        {/* <Reducer /> */}
        {/* <UseMemo /> */}
        <UseRef />
        {/* <ListCard list={data} /> */}
      </ThemeContextProvider>
    </>
  );
}

export default App;
