//import axios from 'axios';
import {OBTENER_PRODUCTOS,
        SIGUIENTES_PRODUCTOS,
        SIGUIENTES_PRODUCTOS_FILTRADOS,
        ANTERIORES_PRODUCTOS,
        ANTERIORES_PRODUCTOS_FILTRADOS,
        PARA_FILTRAR_USADOS,
        PARA_FILTRAR_NUEVOS,
        PARA_FILTRAR_MENOR_PRECIO,
        PARA_FILTRAR_MAYOR_PRECIO} from './constants.js';

const dataInicial = {
  array: [],
  resFiltrados: [],
  offset: 0,
  offsetFil: 0,
  value: [],
  interruptor: false
};

export default function searchReducer(state=dataInicial,action) {
  switch(action.type) {
  case OBTENER_PRODUCTOS:
      return {
          ...state, 
          array: action.payload, 
          value: action.value, 
          interruptor: true
      };
  case SIGUIENTES_PRODUCTOS:
      return {
          ...state, 
          array: action.payload.array, 
          offset: action.payload.offset, 
          value: action.payload.value
      };
  case SIGUIENTES_PRODUCTOS_FILTRADOS:
      return {
          ...state, 
          resFiltrados: action.payload.resFiltrados, 
          offsetFil: action.payload.offset, 
          value: action.payload.value
      };
  case ANTERIORES_PRODUCTOS:
      return {
          ...state, 
          array: action.payload.array, 
          offset: action.payload.offset
      };
  case ANTERIORES_PRODUCTOS_FILTRADOS:
      return {
          ...state, 
          resFiltrados: action.payload.resFiltrados, 
          offsetFil: action.payload.offset
      };
  case PARA_FILTRAR_USADOS:
      return {
          ...state,  
          resFiltrados: action.payload, 
          value: action.value, 
          interruptor: false
      };
  case PARA_FILTRAR_NUEVOS:
          return {
              ...state,  
              resFiltrados: action.payload, 
              value: action.value, 
              interruptor: false 
          };
  case PARA_FILTRAR_MENOR_PRECIO:
      return {
          ...state,  
          resFiltrados: action.payload, 
          value: action.value, 
          interruptor: false
      };
  case PARA_FILTRAR_MAYOR_PRECIO:
          return {
              ...state,  
              resFiltrados: action.payload, 
              value: action.value, 
              interruptor: false
          };
  default:
      return state;
      
  }
  
  }