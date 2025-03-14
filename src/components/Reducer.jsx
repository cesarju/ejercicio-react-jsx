import { useReducer } from "react";
import { reducer } from "../reducer";
export const Reducer = () => {
  const initialState = {
    counterR: 5,
    nombre: "",
    apellido: "",
    list: [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state.list);

  return (
    <>
      <h2>Contador useReducer: {state.counterR}</h2>
      <button onClick={() => dispatch({ type: "INCREMENTAR" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENTAR" })}>-</button>

      <input
        type="text"
        value={state.nombre}
        onChange={(e) =>
          dispatch({ type: "CHANGE_TEXT_NAME", payload: e.target.value })
        }
        placeholder="Nombre"
      />
      <input
        type="text"
        value={state.apellido}
        onChange={(e) =>
          dispatch({ type: "CHANGE_TEXT_LASTNAME", payload: e.target.value })
        }
        placeholder="Apellido"
      />
      <button
        onClick={() => dispatch({ type: "ADD_ITEM", payload: state.list })}
      >
        Add
      </button>

      <h3>
        {state.nombre} {state.apellido}
      </h3>

      <h3>Lista de estudiantes</h3>
      {
        <ul>
          {state.list.map((item) => (
            <li key={crypto.randomUUID()}>
              {item.nombre} {item.apellido}
            </li>
          ))}
        </ul>
      }
    </>
  );
};
