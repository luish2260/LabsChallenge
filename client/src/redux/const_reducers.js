const dataInicial = {
  array: [],
  resFiltrados: [],
  offset: 0,
  offsetFil: 0,
  value: [],
  interruptor: false
};

export const OBTENER_PRODUCTOS = 'OBTENER_PRODUCTOS';
export const SIGUIENTES_PRODUCTOS = 'SIGUIENTES_PRODUCTOS';
export const ANTERIORES_PRODUCTOS = 'ANTERIORES_PRODUCTOS';
export const PARA_FILTRAR_USADOS = 'PARA_FILTRAR_USADOS';
export const PARA_FILTRAR_NUEVOS = 'PARA_FILTRAR_NUEVOS';
export const SIGUIENTES_PRODUCTOS_FILTRADOS = 'SIGUIENTES_PRODUCTOS_FILTRADOS';
export const ANTERIORES_PRODUCTOS_FILTRADOS = 'ANTERIORES_PRODUCTOS_FILTRADOS';
export const PARA_FILTRAR_MENOR_PRECIO = 'PARA_FILTRAR_MENOR_PRECIO';
export const PARA_FILTRAR_MAYOR_PRECIO = 'PARA_FILTRAR_MAYOR_PRECIO';

export default function searchReducer(state = dataInicial, action) { //searchReducer es importada en el store

  switch (action.type) {

    case OBTENER_PRODUCTOS:
      return {
        ...state,
        array: action.payload,
        interruptor: true,
        value:action.value
      };

    case SIGUIENTES_PRODUCTOS:
      return {
        ...state,
        array: action.payload.array,
        offset: action.payload.offset,
        value:action.value
      };

    case ANTERIORES_PRODUCTOS:
      return {
        ...state,
        array: action.payload.array,
        offset: action.payload.offset,
        value:action.value
      };

    case PARA_FILTRAR_USADOS:
      return {
        ...state,
        resFiltrados: action.payload,
        interruptor: false,
        value:action.value
      };

    case PARA_FILTRAR_NUEVOS:
      return {
        ...state,
        resFiltrados: action.payload,
        interruptor: false,
        value:action.value
      };

    case SIGUIENTES_PRODUCTOS_FILTRADOS:
      return {
        ...state,
        resFiltrados: action.payload.resFiltrados,
        offsetFil: action.payload.offset,
        interruptor: false,
        value:action.value
      };

    case ANTERIORES_PRODUCTOS_FILTRADOS:
      return {
        ...state,
        resFiltrados: action.payload.resFiltrados,
        offsetFil: action.payload.offset,
        interruptor: false,
        value:action.value

      };

    case PARA_FILTRAR_MENOR_PRECIO:
      return {
        ...state,
        resFiltrados: action.payload,
        interruptor: false,
        value:action.value
      };

    case PARA_FILTRAR_MAYOR_PRECIO:
      return {
        ...state,
        resFiltrados: action.payload,
        interruptor: false,
        value:action.value
      };

    default:
      return state;

  };
};