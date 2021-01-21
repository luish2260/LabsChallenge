import React from "react";
import ProductCard from './ProductCard.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { siguientesProductos, anterioresProductos } from '../redux/actions.js';
import { Button } from '@material-ui/core';

const Paginas = () => {

  const dispatch = useDispatch();
  var interruptor1 = useSelector((store) => store.productos.interruptor1);
  var interruptor2 = useSelector((store) => store.productos.interruptor2);
  var productos = useSelector((store) => store.productos.array);
  var prodNuevos = useSelector((store) => store.productos.arrayNew);
  var prodUsados = useSelector((store) => store.productos.arrayUsed);
  var value = useSelector((store) => store.productos.value);
  var leyenda = (<h2 style={{ textAlign: "center", marginTop: "140px" }}>RESULTS</h2>);
  if ((prodNuevos.length > 0 || prodUsados.length > 0) && interruptor1 === false) {
    productos = false; //para que no se muestren los productos generales
    leyenda = null; //con esto se cancela la variable anterior, que muestra RESULTS
  }; //fin del if

  return (
    <div>
      {productos.length > 0 ? (
        <div style={{ textAlign: "center", position: "sticky" }}>
          <Button color='primary' variant='contained' onClick={() => dispatch(anterioresProductos(value))}>PREV</Button>
          <Button color='primary' variant='contained' onClick={() => dispatch(siguientesProductos(value))}>NEXT</Button>
        </div>
      )
        : null}
      {(prodNuevos.length > 0 && interruptor1 === false && interruptor2 === false) ? (
        <div style={{ textAlign: "center", position: "sticky" }}>
          <Button color='primary' variant='contained'>PREV NUEVOS</Button>
          <Button color='primary' variant='contained'>NEXT NUEVOS</Button>
        </div>
      )
        : null}
      {(prodUsados.length > 0 && interruptor1 === false && interruptor2 === true) ? (
        <div style={{ textAlign: "center", position: "sticky" }}>
          <Button color='primary' variant='contained'>PREV USADOS</Button>
          <Button color='primary' variant='contained'>NEXT USADOS</Button>
        </div>
      )
        : null}
      <div class='container'>
        <div className="row">
          {productos.length > 0 ? productos.map((e) => (
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
          )) : leyenda}
        </div>
        <div className="row">
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
          )) : null}
        </div>
        <div className="row">
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
      {productos.length > 0 ? (
        <div style={{ textAlign: "center", position: "sticky" }}>
          <Button color='primary' variant='contained' onClick={() => dispatch(anterioresProductos(value))}>PREV</Button>
          <Button color='primary' variant='contained' onClick={() => dispatch(siguientesProductos(value))}>NEXT</Button>
        </div>
      )
        : null}
      {(prodNuevos.length > 0 && interruptor1 === false && interruptor2 === false) ? (
        <div style={{ textAlign: "center", position: "sticky" }}>
          <Button color='primary' variant='contained'>PREV NUEVOS</Button>
          <Button color='primary' variant='contained'>NEXT NUEVOS</Button>
        </div>
      )
        : null}
      {(prodUsados.length > 0 && interruptor1 === false && interruptor2 === true) ? (
        <div style={{ textAlign: "center", position: "sticky" }}>
          <Button color='primary' variant='contained'>PREV USADOS</Button>
          <Button color='primary' variant='contained'>NEXT USADOS</Button>
        </div>
      )
        : null}
    </div>
  );
};

export default Paginas;