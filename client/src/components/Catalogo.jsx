import React from 'react';
import Paginas from './Paginas.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { obtenerProductos, paraFiltrarMenorP, paraFiltrarMayorP, paraFiltrarUsados, paraFiltrarNuevos, paraFiltrarMenorPNuevo, paraFiltrarMenorPUsado, paraFiltrarMayorPNuevo, paraFiltrarMayorPUsado } from '../redux/actions.js';
import { Button } from '@material-ui/core';
import { ButtonGroup } from '@material-ui/core';
import './Catalogo.css';

const Catalogo = () => {
  const value = useSelector(store => store.productos.value);
  const dispatch = useDispatch();
  const res = useSelector(store => store.productos.array);
  const interruptor1 = useSelector(store => store.productos.interruptor1);
  const interruptor2 = useSelector(store => store.productos.interruptor2);
  return (
    <div>
      <div className="row">
        <h4 style={{ display: "flex", justifyContent: "center" }}>Ordenar productos</h4>
        {(interruptor1 === true && interruptor2 === true) ? (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <ButtonGroup orientation="horizontal" color="secondary" aria-label="outlined primary button group">
              <Button type="submit" variant='contained' color="secondary" onClick={() => dispatch(paraFiltrarMenorP(value))}><i className="material-icons">attach_money</i>Menor a Mayor</Button>
              <Button type="submit" variant='contained' color="secondary" onClick={() => dispatch(paraFiltrarMayorP(value))}><i className="material-icons">attach_money</i>Mayor a Menor</Button>
              <Button type="submit" variant='contained' color="secondary" onClick={() => dispatch(paraFiltrarNuevos(value))}>Nuevos</Button>
              <Button type="submit" variant='contained' color="secondary" onClick={() => dispatch(paraFiltrarUsados(value))}>Usados</Button>
            </ButtonGroup>
          </div>
        )
          : null}
        {(interruptor1 === false && interruptor2 === true) ? (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <ButtonGroup orientation="horizontal" color="secondary" aria-label="outlined primary button group">
              <Button type="submit" variant='contained' color="secondary" onClick={() => dispatch(paraFiltrarMenorPUsado(value))}><i className="material-icons">attach_money</i>Menor a Mayor</Button>
              <Button type="submit" variant='contained' color="secondary" onClick={() => dispatch(paraFiltrarMayorPUsado(value))}><i className="material-icons">attach_money</i>Mayor a Menor</Button>
              <Button type="submit" variant='contained' color="secondary" onClick={() => dispatch(obtenerProductos(value))}>Todos</Button>
              <Button type="submit" variant='contained' color="secondary" onClick={() => dispatch(paraFiltrarNuevos(value))}>Nuevos</Button>
            </ButtonGroup>
          </div>
        )
          : null}
        {(interruptor1 === false && interruptor2 === false) ? (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <ButtonGroup orientation="horizontal" color="secondary" aria-label="outlined primary button group">
              <Button type="submit" variant='contained' color="secondary" onClick={() => dispatch(paraFiltrarMenorPNuevo(value))}><i className="material-icons">attach_money</i>Menor a Mayor</Button>
              <Button type="submit" variant='contained' color="secondary" onClick={() => dispatch(paraFiltrarMayorPNuevo(value))}><i className="material-icons">attach_money</i>Mayor a Menor</Button>
              <Button type="submit" variant='contained' color="secondary" onClick={() => dispatch(obtenerProductos(value))}>Todos</Button>
              <Button type="submit" variant='contained' color="secondary" onClick={() => dispatch(paraFiltrarUsados(value))}>Usados</Button>
            </ButtonGroup>
          </div>
        )
          : null}
      </div>
      <div className="content">
        <div className="row"> {res ? <Paginas p={res.results} /> : null}
        </div>
      </div>
    </div>
  );
};

export default Catalogo;