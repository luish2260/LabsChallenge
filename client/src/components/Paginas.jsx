import React from "react";
import ProductCard from './ProductCard.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { siguientesProductos, anterioresProductos, siguientesProdNuevos, anterioresProdNuevos, anterioresProdUsados, siguientesProdUsados } from '../redux/actions.js';
import { Button } from '@material-ui/core';

const Paginas = () => {

  const dispatch = useDispatch();
  let interruptor1 = useSelector((store) => store.productos.interruptor1);
  let interruptor2 = useSelector((store) => store.productos.interruptor2);
  let productos = useSelector((store) => store.productos.array);
  let prodNuevos = useSelector((store) => store.productos.arrayNew);
  let prodUsados = useSelector((store) => store.productos.arrayUsed);
  let value = useSelector((store) => store.productos.value);
  /* if ((prodNuevos.length > 0 || prodUsados.length > 0) && interruptor1 === false)
    productos = false; */

  return (
    <div>
      <div>
        <h2 style={{ textAlign: "center", marginTop: "140px" }}>RESULTADOS</h2>
      </div>
      {(productos.length > 0 && interruptor1 === true && interruptor2 === true) ? (
        <div style={{ textAlign: "center", position: "sticky" }}>
          <Button color='primary' variant='contained' onClick={() => dispatch(anterioresProductos(value))}>ANT</Button>
          <Button color='primary' variant='contained' onClick={() => dispatch(siguientesProductos(value))}>SIG</Button>
        </div>
      )
        : null}
      {(prodNuevos.length > 0 && interruptor1 === false && interruptor2 === false) ? (
        <div style={{ textAlign: "center", position: "sticky" }}>
          <Button color='primary' variant='contained' onClick={() => dispatch(anterioresProdNuevos(value))}>ANT NUEVOS</Button>
          <Button color='primary' variant='contained' onClick={() => dispatch(siguientesProdNuevos(value))}>SIG NUEVOS</Button>
        </div>
      )
        : null}
      {(prodUsados.length > 0 && interruptor1 === false && interruptor2 === true) ? (
        <div style={{ textAlign: "center", position: "sticky" }}>
          <Button color='primary' variant='contained' onClick={() => dispatch(anterioresProdUsados(value))}>ANT USADOS</Button>
          <Button color='primary' variant='contained' onClick={() => dispatch(siguientesProdUsados(value))}>SIG USADOS</Button>
        </div>
      )
        : null}
      <div className='container'>
        <div className="column">
          {(productos.length > 0 && interruptor1 === true && interruptor2 === true) ? productos.map((e) => (
            <div className="col s13 m6 l4 " key={e.id}>
              <ProductCard
                img={e.thumbnail}
                title={e.title}
                price={e.price}
                condition={e.condition}
                currentId={e.currency_id}
                availableQuantity={e.available_quantity}
                permalink={e.permalink}
              />
            </div>
          ))
            : null}
        </div>
        <div className="column">
          {(prodNuevos.length > 0 && interruptor1 === false && interruptor2 === false) ? prodNuevos.map((e) => (
            <div className="col s13 m6 l4 " key={e.id}>
              <ProductCard
                img={e.thumbnail}
                title={e.title}
                price={e.price}
                condition={e.condition}
                currentId={e.currency_id}
                availableQuantity={e.available_quantity}
                permalink={e.permalink}
              />
            </div>
          ))
            : null}
        </div>
        <div className="column">
          {(prodUsados.length > 0 && interruptor1 === false && interruptor2 === true) ? prodUsados.map((e) => (
            <div className="col s13 m6 l4 " key={e.id}>
              <ProductCard
                img={e.thumbnail}
                title={e.title}
                price={e.price}
                condition={e.condition}
                currentId={e.currency_id}
                availableQuantity={e.available_quantity}
                permalink={e.permalink}
              />
            </div>
          ))
            : null}
        </div>
      </div>
      {(productos.length > 0 && interruptor1 === true && interruptor2 === true) ? (
        <div style={{ textAlign: "center", position: "sticky" }}>
          <Button color='primary' variant='contained' onClick={() => dispatch(anterioresProductos(value))}>PREV</Button>
          <Button color='primary' variant='contained' onClick={() => dispatch(siguientesProductos(value))}>NEXT</Button>
        </div>
      )
        : null}
      {(prodNuevos.length > 0 && interruptor1 === false && interruptor2 === false) ? (
        <div style={{ textAlign: "center", position: "sticky" }}>
          <Button color='primary' variant='contained' onClick={() => dispatch(anterioresProdNuevos(value))}>PREV NUEVOS</Button>
          <Button color='primary' variant='contained' onClick={() => dispatch(siguientesProdNuevos(value))}>NEXT NUEVOS</Button>
        </div>
      )
        : null}
      {(prodUsados.length > 0 && interruptor1 === false && interruptor2 === true) ? (
        <div style={{ textAlign: "center", position: "sticky" }}>
          <Button color='primary' variant='contained' onClick={() => dispatch(anterioresProdUsados(value))}>PREV USADOS</Button>
          <Button color='primary' variant='contained' onClick={() => dispatch(siguientesProdUsados(value))}>NEXT USADOS</Button>
        </div>
      )
        : null}
    </div>
  );
};

export default Paginas;