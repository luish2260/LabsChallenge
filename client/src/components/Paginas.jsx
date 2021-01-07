import React from "react";
import ProductCard from './ProductCard.jsx';
import { useDispatch, useSelector } from 'react-redux';
import {
  siguientesProductos,
  anterioresProductos,
  siguientesProdFil,
  anterioresProdFil
}
  from '../redux/actions.js';
import { Button } from '@material-ui/core';

const Paginas = () => {

  const dispatch = useDispatch();
  var productos = useSelector((store) => store.productos.array);
  var interruptor = useSelector((store) => store.productos.interruptor);
  const prodFiltrados = useSelector((store) => store.productos.resFiltrados);
  const value = useSelector((store) => store.productos.value);
  var leyenda = (<h2 style={{ textAlign: "center", marginTop: "140px" }}>RESULTS</h2>);
  if (prodFiltrados.length > 0 && interruptor === false) {
    productos = false;
    leyenda = null;
  }; //fin del if

  return (
    <div>
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
          )
          )
            : leyenda}
        </div>

        <div className="row">
          {prodFiltrados.length > 0 ? prodFiltrados.map((e) => (
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
          )
          )
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

      {prodFiltrados.length > 0 && interruptor === false ? (
        <div style={{ textAlign: "center", position: "sticky" }}>
          <Button color='primary' variant='contained' onClick={() => dispatch(anterioresProdFil(value))}>PREV</Button>
          <Button color='primary' variant='contained' onClick={() => dispatch(siguientesProdFil(value))}>NEXT</Button>
        </div>
      )
        : null}
    </div>
  );
};

export default Paginas;