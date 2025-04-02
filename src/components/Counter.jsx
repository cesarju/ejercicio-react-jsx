import { useCounter } from "../hooks/useCounter";

export function Counter() {
  const count1 = useCounter([]);
  const { count, increment, decrement, reset } = useCounter();
  console.log(count);

  return (
    <>
      <h3>Contador: {count1.count}</h3>
      <button className="payment-button" onClick={count1.increment}>
        +
      </button>
      <button className="payment-button" onClick={count1.decrement}>
        -
      </button>
      <hr />
      <h2>Contador Dos: {count}</h2>
      <button onClick={increment}>sum</button>
      <button onClick={decrement}>rest</button>
      <button onClick={reset}>reset</button>
    </>
  );
}
