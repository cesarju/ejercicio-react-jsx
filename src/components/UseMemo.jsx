import { useMemo, useState } from "react";

export const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState(false);
  const fibonacci = (num) => {
    console.log("Mensaje");
    if (num <= 1) return num;

    return fibonacci(num - 1) + fibonacci(num - 2);
  };

  // const result = fibonacci(count);
  // console.log(result);

  const resultMemo = useMemo(() => fibonacci(count), [count]);

  return (
    <>
      <h1>Clase de useMemo </h1>
      <h2>{resultMemo} valor</h2>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
      <button onClick={() => setTheme(!theme)}>{theme ? "☀️" : "🌑"}</button>
    </>
  );
};
