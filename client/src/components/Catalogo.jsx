import React from 'react';
import Paginas from './Paginas.jsx';
import { useSelector,useDispatch } from 'react-redux';
import { paraFiltrarUsados,paraFiltrarNuevos,paraFiltrarMayorP,paraFiltrarMenorP,obtenerProductos } from '../redux/actions.js';
import { Button } from '@material-ui/core';
import { ButtonGroup } from '@material-ui/core';
const Catalogo = () => {

const value = useSelector(store => store.productos.value);
const dispatch = useDispatch();
const res = useSelector(store => store.productos.array);

return (
<div>
<div className="row">
<h4 style= {{display: "flex", justifyContent:"center"}}>Ordenar productos</h4>
<div style= {{display: "flex", justifyContent:"center"}}>
<ButtonGroup orientation="vertical" color="secondary" aria-label="outlined primary button group">
<Button type="submit" variant='contained' color="secondary" onClick={() => dispatch(paraFiltrarMenorP(value))}><i className="material-icons">attach_money</i>Menor a Mayor</Button>
<Button type="submit" variant='contained' color="secondary" onClick={() => dispatch(paraFiltrarMayorP(value))}><i className="material-icons">attach_money</i>Mayor a Menor</Button> 
<Button type="submit" variant='contained' color="secondary" onClick={() => dispatch(obtenerProductos(value))}>Todos</Button> 
<Button type="submit" variant='contained' color="secondary" onClick={() => dispatch(paraFiltrarNuevos(value))}>Nuevos</Button>
<Button type="submit" variant='contained' color="secondary" onClick={() => dispatch(paraFiltrarUsados(value))}>Usados</Button>
</ButtonGroup>
</div>
</div>
<div className="row">
</div>
<div className="content">
<div className="row"> {res ? <Paginas p = {res.results} /> : null}
</div>
</div>
</div>
);
};

export default Catalogo;