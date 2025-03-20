import { useEffect, useRef } from "react";

export const UseRef = () => {
  const referncia = useRef(null);
  // useEffect(() => {
  //   console.log(referncia.current);
  //   referncia.current.focus();
  // }, []);

  const handleFocus = () => {
    // referncia.current.select();
    console.log(referncia.current);

    referncia.current.value = "Apellido";
  };

  return (
    <>
      <h2>Formulario</h2>
      <input
        ref={referncia}
        type="text"
        placeholder="Nombre"
        value="Hola Mundo"
      />

      <button onClick={handleFocus}>Select</button>
    </>
  );
};
