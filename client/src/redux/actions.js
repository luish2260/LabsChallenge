import axios from 'axios';
import {
  OBTENER_PRODUCTOS_GENERAL,
  SIGUIENTES_PRODUCTOS_GENERAL,
  ANTERIORES_PRODUCTOS_GENERAL,
  PARA_FILTRAR_MENOR_PRECIO_GENERAL,
  PARA_FILTRAR_MAYOR_PRECIO_GENERAL,
  PARA_FILTRAR_USADOS,
  SIGUIENTES_PRODUCTOS_USADOS,
  ANTERIORES_PRODUCTOS_USADOS,
  PARA_FILTRAR_MENOR_PRECIO_USADO,
  PARA_FILTRAR_MAYOR_PRECIO_USADO,
  PARA_FILTRAR_NUEVOS,
  SIGUIENTES_PRODUCTOS_NUEVOS,
  ANTERIORES_PRODUCTOS_NUEVOS,
  PARA_FILTRAR_MENOR_PRECIO_NUEVO,
  PARA_FILTRAR_MAYOR_PRECIO_NUEVO
} from './reducers.js';

//OBTENER PRODUCTOS GENERAL
export const obtenerProductos = (value) => async (dispatch, getState) => {
  try {
    const res = await axios.get('http://localhost:5000/api/search/' + value + '&limit=30');
    dispatch({
      type: OBTENER_PRODUCTOS_GENERAL,
      payload: res.data.results,
      value
    });
  }
  catch (err) {
    console.log(err);
  };
};
//OBTENER USADOS
export const paraFiltrarUsados = (value) => async (dispatch, getState) => {
  try {
    const res = await axios.get('http://localhost:5000/api/search/' + value + '&condition=used&limit=30');
    dispatch({
      type: PARA_FILTRAR_USADOS,
      payload: res.data.results,
      value
    });
  }
  catch (err) {
    console.log(err);
  };
};
//OBTENER NUEVOS
export const paraFiltrarNuevos = (value) => async (dispatch, getState) => {
  try {
    const res = await axios.get('http://localhost:5000/api/search/' + value + '&condition=new&limit=30');
    dispatch({
      type: PARA_FILTRAR_NUEVOS,
      payload: res.data.results,
      value
    });
  }
  catch (err) {
    console.log(err);
  };
};
//SIGUIENTES GENERAL
export const siguientesProductos = (value) => async (dispatch, getState) => {
  const offset = getState().productos.offset;
  const siguientes = offset + 30;
  try {
    const res = await axios.get('http://localhost:5000/api/search/' + value + '&offset=' + siguientes + '&limit=30');
    dispatch({
      type: SIGUIENTES_PRODUCTOS_GENERAL,
      payload: { array: res.data.results, offset: siguientes },
      value
    });
  }
  catch (err) {
    console.log(err);
  };
};
//SIGUIENTES USADOS
export const siguientesProdUsados = (value) => async (dispatch, getState) => {
  const offset = getState().productos.offsetUsed;
  const siguientes = offset + 30;
  try {
    const res = await axios.get('http://localhost:5000/api/search/' + value + '&offset=' + siguientes + '&condition=used&limit=30');
    dispatch({
      type: SIGUIENTES_PRODUCTOS_USADOS,
      payload: { array: res.data.results, offset: siguientes },
      value
    });
  }
  catch (err) {
    console.log(err);
  };
};
//SIGUIENTES NUEVOS
export const siguientesProdNuevos = (value) => async (dispatch, getState) => {
  const offset = getState().productos.offsetNew;
  const siguientes = offset + 30;
  try {
    const res = await axios.get('http://localhost:5000/api/search/' + value + '&offset=' + siguientes + '&condition=new&limit=30');
    dispatch({
      type: SIGUIENTES_PRODUCTOS_NUEVOS,
      payload: { array: res.data.results, offset: siguientes },
      value
    });
  }
  catch (err) {
    console.log(err);
  };
};
//ANTERIORES GENERAL
export const anterioresProductos = (value) => async (dispatch, getState) => {
  const offset = getState().productos.offset;
  const anteriores = offset - 30;
  try {
    const res = await axios.get('http://localhost:5000/api/search/' + value + '&offset=' + anteriores + '&limit=30');
    dispatch({
      type: ANTERIORES_PRODUCTOS_GENERAL,
      payload: { array: res.data.results, offset: anteriores },
      value
    });
  }
  catch (err) {
    console.log(err);
  };
};
//ANTERIORES USADOS
export const anterioresProdUsados = (value) => async (dispatch, getState) => {
  const offset = getState().productos.offsetUsed;
  const anteriores = offset - 30;
  try {
    const res = await axios.get('http://localhost:5000/api/search/' + value + '&offset=' + anteriores + '&condition=used&limit=30');
    dispatch({
      type: ANTERIORES_PRODUCTOS_USADOS,
      payload: { array: res.data.results, offset: anteriores },
      value
    });
  }
  catch (err) {
    console.log(err);
  };
};
//ANTERIORES NUEVOS
export const anterioresProdNuevos = (value) => async (dispatch, getState) => {
  const offset = getState().productos.offsetNew;
  const anteriores = offset - 30;
  try {
    const res = await axios.get('http://localhost:5000/api/search/' + value + '&offset=' + anteriores + '&condition=new&limit=30');
    dispatch({
      type: ANTERIORES_PRODUCTOS_NUEVOS,
      payload: { array: res.data.results, offset: anteriores },
      value
    });
  }
  catch (err) {
    console.log(err);
  };
};
//PRECIO DE MENOR A MAYOR GENERAL
export const paraFiltrarMenorP = (value) => async (dispatch, getState) => {
  try {
    const res = await axios.get('http://localhost:5000/api/search/' + value + '&limit=30');
    dispatch({
      type: PARA_FILTRAR_MENOR_PRECIO_GENERAL,
      payload: res.data.results.sort((prev, next) => { return prev.price - next.price }),
      value
    });
  }
  catch (err) {
    console.log(err);
  };
};
//PRECIO DE MENOR A MAYOR USADO
export const paraFiltrarMenorPUsado = (value) => async (dispatch, getState) => {
  try {
    const res = await axios.get('http://localhost:5000/api/search/' + value + '&condition=used&limit=30');
    dispatch({
      type: PARA_FILTRAR_MENOR_PRECIO_USADO,
      payload: res.data.results.sort((prev, next) => { return prev.price - next.price }),
      value
    });
  }
  catch (err) {
    console.log(err);
  };
};
//PRECIO DE MENOR A MAYOR NUEVO
export const paraFiltrarMenorPNuevo = (value) => async (dispatch, getState) => {
  try {
    const res = await axios.get('http://localhost:5000/api/search/' + value + '&condition=new&limit=30');
    dispatch({
      type: PARA_FILTRAR_MENOR_PRECIO_NUEVO,
      payload: res.data.results.sort((prev, next) => { return prev.price - next.price }),
      value
    });
  }
  catch (err) {
    console.log(err);
  };
};
//PRECIO DE MAYOR A MENOR GENERAL
export const paraFiltrarMayorP = (value) => async (dispatch, getState) => {
  try {
    const res = await axios.get('http://localhost:5000/api/search/' + value + '&limit=30');
    dispatch({
      type: PARA_FILTRAR_MAYOR_PRECIO_GENERAL,
      payload: res.data.results.sort((prev, next) => { return next.price - prev.price }),
      value
    });
  }
  catch (err) {
    console.log(err);
  };
};

//PRECIO DE MAYOR A MENOR USADO
export const paraFiltrarMayorPUsado = (value) => async (dispatch, getState) => {
  try {
    const res = await axios.get('http://localhost:5000/api/search/' + value + '&condition=used&limit=30');
    dispatch({
      type: PARA_FILTRAR_MAYOR_PRECIO_USADO,
      payload: res.data.results.sort((prev, next) => { return next.price - prev.price }),
      value
    });
  }
  catch (err) {
    console.log(err);
  };
};

//PRECIO DE MAYOR A MENOR NUEVO
export const paraFiltrarMayorPNuevo = (value) => async (dispatch, getState) => {
  try {
    const res = await axios.get('http://localhost:5000/api/search/' + value + '&condition=new&limit=30');
    dispatch({
      type: PARA_FILTRAR_MAYOR_PRECIO_NUEVO,
      payload: res.data.results.sort((prev, next) => { return next.price - prev.price }),
      value
    });
  }
  catch (err) {
    console.log(err);
  };
};