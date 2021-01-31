const dataInicial = {
  array: [], //general
  arrayUsed: [], //usados
  arrayNew: [], //nuevos
  offset: 0, //general
  offsetUsed: 0, //usados
  offsetNew: 0, //nuevos
  value: [], //general
  interruptor1: true, //general
  interruptor2: true //general
};

export const OBTENER_PRODUCTOS_GENERAL = 'OBTENER_PRODUCTOS_GENERAL';
export const SIGUIENTES_PRODUCTOS_GENERAL = 'SIGUIENTES_PRODUCTOS_GENERAL';
export const ANTERIORES_PRODUCTOS_GENERAL = 'ANTERIORES_PRODUCTOS_GENERAL';
export const PARA_FILTRAR_MENOR_PRECIO_GENERAL = 'PARA_FILTRAR_MENOR_PRECIO_GENERAL';
export const PARA_FILTRAR_MAYOR_PRECIO_GENERAL = 'PARA_FILTRAR_MAYOR_PRECIO_GENERAL';
export const PARA_FILTRAR_USADOS = 'PARA_FILTRAR_USADOS';
export const SIGUIENTES_PRODUCTOS_USADOS = 'SIGUIENTES_PRODUCTOS_USADOS';
export const ANTERIORES_PRODUCTOS_USADOS = 'ANTERIORES_PRODUCTOS_USADOS';
export const PARA_FILTRAR_MENOR_PRECIO_USADO = 'PARA_FILTRAR_MENOR_PRECIO_USADO';
export const PARA_FILTRAR_MAYOR_PRECIO_USADO = 'PARA_FILTRAR_MAYOR_PRECIO_USADO';
export const PARA_FILTRAR_NUEVOS = 'PARA_FILTRAR_NUEVOS';
export const SIGUIENTES_PRODUCTOS_NUEVOS = 'SIGUIENTES_PRODUCTOS_NUEVOS';
export const ANTERIORES_PRODUCTOS_NUEVOS = 'ANTERIORES_PRODUCTOS_NUEVOS';
export const PARA_FILTRAR_MENOR_PRECIO_NUEVO = 'PARA_FILTRAR_MENOR_PRECIO_NUEVO';
export const PARA_FILTRAR_MAYOR_PRECIO_NUEVO = 'PARA_FILTRAR_MAYOR_PRECIO_NUEVO';

export default function searchReducer(state = dataInicial, action) {

  switch (action.type) {

    case OBTENER_PRODUCTOS_GENERAL:
      return {
        ...state,
        offset: 0,
        array: action.payload,
        interruptor1: true,
        interruptor2: true,
        value: action.value
      };

    case SIGUIENTES_PRODUCTOS_GENERAL:
      return {
        ...state,
        array: action.payload.array,
        offset: action.payload.offset,
        value: action.value
      };

    case ANTERIORES_PRODUCTOS_GENERAL:
      return {
        ...state,
        array: action.payload.array,
        offset: action.payload.offset,
        value: action.value
      };

    case PARA_FILTRAR_MENOR_PRECIO_GENERAL:
      return {
        ...state,
        array: action.payload,
        value: action.value
      };

    case PARA_FILTRAR_MAYOR_PRECIO_GENERAL:
      return {
        ...state,
        array: action.payload,
        value: action.value
      };

    case PARA_FILTRAR_USADOS:
      return {
        ...state,
        arrayUsed: action.payload,
        offsetUsed: 0,
        interruptor1: false,
        interruptor2: true,
        value: action.value
      };

    case SIGUIENTES_PRODUCTOS_USADOS:
      return {
        ...state,
        arrayUsed: action.payload.array,
        offsetUsed: action.payload.offset,
        value: action.value
      };

    case ANTERIORES_PRODUCTOS_USADOS:
      return {
        ...state,
        arrayUsed: action.payload.array,
        offsetUsed: action.payload.offset,
        value: action.value
      };

    case PARA_FILTRAR_MENOR_PRECIO_USADO:
      return {
        ...state,
        arrayUsed: action.payload,
        value: action.value
      };

    case PARA_FILTRAR_MAYOR_PRECIO_USADO:
      return {
        ...state,
        arrayUsed: action.payload,
        value: action.value
      };

    case PARA_FILTRAR_NUEVOS:
      return {
        ...state,
        arrayNew: action.payload,
        offsetNew: 0,
        interruptor1: false,
        interruptor2: false,
        value: action.value
      };

    case SIGUIENTES_PRODUCTOS_NUEVOS:
      return {
        ...state,
        arrayNew: action.payload.array,
        offsetNew: action.payload.offset,
        value: action.value
      };

    case ANTERIORES_PRODUCTOS_NUEVOS:
      return {
        ...state,
        arrayNew: action.payload.array,
        offsetNew: action.payload.offset,
        value: action.value
      };

    case PARA_FILTRAR_MENOR_PRECIO_NUEVO:
      return {
        ...state,
        arrayNew: action.payload,
        value: action.value
      };

    case PARA_FILTRAR_MAYOR_PRECIO_NUEVO:
      return {
        ...state,
        arrayNew: action.payload,
        value: action.value
      };

    default:
      return state;

  };
};