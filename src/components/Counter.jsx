import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(1);

  let contador = 1;
  const handleAddCounter = () => {
    contador++;
    console.log(contador);
    setCount(count + 1);
  };
  const handleMinusCounter = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <h3>Contador: {count}</h3>
      <button className="payment-button" onClick={handleAddCounter}>
        +
      </button>
      <button className="payment-button" onClick={handleMinusCounter}>
        -
      </button>
    </>
  );
}
