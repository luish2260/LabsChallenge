import axios from 'axios';
import { OBTENER_PRODUCTOS,
         SIGUIENTES_PRODUCTOS,
         ANTERIORES_PRODUCTOS,
         PARA_FILTRAR_USADOS,
         PARA_FILTRAR_NUEVOS,
         SIGUIENTES_PRODUCTOS_FILTRADOS,
         ANTERIORES_PRODUCTOS_FILTRADOS,
         PARA_FILTRAR_MENOR_PRECIO,
         PARA_FILTRAR_MAYOR_PRECIO } from './const_reducers.js';

//::::: OBTENER PRODUCTOS (action creators)
export const obtenerProductos = (valor) => async (dispatch, getState) => {

try {
    
    const res = await axios.get('http://localhost:5000/api/search/' + valor + '&limit=30')
    dispatch({
      type: OBTENER_PRODUCTOS,
      payload: res.data.results,
      value: valor
      
  });
} 

catch (err) {
  console.log(err);
}
};

//:::: SIGUIENTES Y ANTERIORES

export const siguientesProductos = (valor) => async (dispatch, getState) => {

  const offset = getState().productos.offset
  const siguientes = offset + 30
  
  try {
      
      const res = await axios.get('http://localhost:5000/api/search/' + valor + '&offset=' + siguientes + '&limit=30') // busqueda luego de q= + req.query.q + 
      dispatch({
        type:SIGUIENTES_PRODUCTOS,
        payload: {
         array:res.data.results,
         offset: siguientes,
         value: valor
         }
      });
  } 
  
  catch (err) {
      console.log(err);
  }
  }
  
  
  export const anterioresProductos = (value) => async (dispatch, getState) => {
  
  
  // console.log('getState', getState().productos.limit)
  const offset = getState().productos.offset
  const anteriores = offset - 30
  
  try {
      const res = await axios.get('http://localhost:5000/api/search/' + value + '&offset=' + anteriores + '&limit=30') // busqueda luego de q= + req.query.q + 
  
          dispatch({
          type:ANTERIORES_PRODUCTOS,
          payload: {
              array:res.data.results,
              offset: anteriores
          }
      })
  } catch (err) {
      console.log(err)
  }
  }
  
  //Ver usados
  export const paraFiltrarUsados = (valor) => async (dispatch, getState) => {
  
  try {
          const res = await axios.get('http://localhost:5000/api/search/' + valor) // busqueda luego de q= + req.query.q + 
  
              dispatch({
              type:PARA_FILTRAR_USADOS,
              payload: res.data.results.filter(producto => producto.condition === 'used'),
              value: valor
              
          })
      } catch (err) {
          console.log(err)
      }
  }
  
  //Ver nuevos
  export const paraFiltrarNuevos = (valor) => async (dispatch, getState) => {
  
  try {
          const res = await  axios.get('http://localhost:5000/api/search/' + valor) // busqueda luego de q= + req.query.q + 
  
              dispatch({
              type:PARA_FILTRAR_NUEVOS,
              payload: res.data.results.filter(producto => producto.condition === 'new'),
              value: valor
              
          })
      } catch (err) {
          console.log(err)
      }
  }
  
  //:::: SIGUIENTES Y ANTERIORES DE PROD FILTRADOS
  
  export const siguientesProdFil = (valor) => async (dispatch, getState) => {
  
  
  // console.log('getState', getState().productos.limit)
  const offset = getState().productos.offsetFil
  const siguientes = offset + 30
  
  try {
      const res = await  axios.get('http://localhost:5000/api/search/' + valor + '&offset=' + siguientes + '&limit=30') // busqueda luego de q= + req.query.q + 
  
          dispatch({
          type:SIGUIENTES_PRODUCTOS_FILTRADOS,
          payload: {
              resFiltrados:res.data.results,
              offset: siguientes,
              value: valor
          }
      })
  } catch (err) {
      console.log(err)
  }
  }
  
  
  export const anterioresProdFil = (value) => async (dispatch, getState) => {
  
  
  // console.log('getState', getState().productos.limit)
  const offset = getState().productos.offsetFil
  const anteriores = offset - 30
  
  try {
      const res = await axios.get('http://localhost:5000/api/search/' + value + '&offset=' + anteriores + '&limit=30') // busqueda luego de q= + req.query.q + 
  
          dispatch({
          type:ANTERIORES_PRODUCTOS_FILTRADOS,
          payload: {
              resFiltrados:res.data.results,
              offset: anteriores
          }
      })
  } catch (err) {
      console.log(err)
  }
  }
  
  //FILTROS DE PRECIO ASC Y DESC
  
  export const paraFiltrarMenorP = (valor) => async (dispatch, getState) => {
  
  try {
          const res = await  axios.get('http://localhost:5000/api/search/' + valor) // busqueda luego de q= + req.query.q + 
  
              dispatch({
              type:PARA_FILTRAR_MENOR_PRECIO,
              payload: res.data.results.sort((prev, next) => { return prev.price - next.price }),
              value: valor
              
          })
      } catch (err) {
          console.log(err)
      }
  }
  
  export const paraFiltrarMayorP = (valor) => async (dispatch, getState) => {
  
  try {
          const res = await  axios.get('http://localhost:5000/api/search/' + valor) // busqueda luego de q= + req.query.q + 
  
              dispatch({
              type:PARA_FILTRAR_MAYOR_PRECIO,
              payload: res.data.results.sort((prev, next) => { return next.price - prev.price }),
              value: valor
              
          })
      } catch (err) {
          console.log(err)
      }
  }