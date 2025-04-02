import { useEffect, useState } from "react";

export function FetchApi() {
  const [list, setList] = useState([]);
  const [count, setCount] = useState(0);

  // const fetchApi = () =>
  //   fetch("https://rickandmortyapi.com/api/character")
  //     .then((res) => res.json())
  //     .then((datos) => setList(datos.results));

  const fetchApi = async () => {
    const urlApi = await fetch("https://rickandmortyapi.com/api/character");
    console.log(urlApi);
    const res = await urlApi.json();
    setList(res.results);
  };

  useEffect(() => {
    fetchApi();
  }, [count]);

  return (
    <>
      <h1>Tema useEffect</h1>
      {list.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>{item.status}</p>
          <img src={item.image} alt={item.name} />
        </div>
      ))}

      <button onClick={() => setCount(count + 1)}>+</button>
      <h1>{count}</h1>
    </>
  );
}
