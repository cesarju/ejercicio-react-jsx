export const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENTAR": {
      return {
        ...state,
        counterR: state.counterR + 1,
      };
    }
    case "DECREMENTAR": {
      return {
        ...state,
        counterR: state.counterR - 1,
      };
    }
    case "CHANGE_TEXT_NAME": {
      return {
        ...state,
        nombre: action.payload,
      };
    }
    case "CHANGE_TEXT_LASTNAME": {
      return {
        ...state,
        apellido: action.payload,
      };
    }
    case "ADD_ITEM": {
      return {
        ...state,
        list: [
          ...action.payload,
          {
            nombre: state.nombre,
            apellido: state.apellido,
          },
        ],
        nombre: "",
        apellido: "",
      };
    }
    default:
      throw new Error("Accion no permitida");
  }
};
