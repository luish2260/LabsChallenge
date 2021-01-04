import React, { Component } from 'react';
import { connect } from 'react-redux';
import { obtenerProductos } from '../redux/actions';

export class Buscador extends Component {
constructor (props) {
super (props);
this.state = {
title:''
};
} //fin del constructor

handleChange (e) {
this.setState({ title: e.target.value });
} //fin del change

handleSubmit (e) {
e.preventDefault();
this.props.obtenerProductos(this.state.title);
} //fin del submit
  
render() {
const { title } = this.state;
return (
<div>
<nav className="row">
<div className="blk col s8 push-s2">
{" "}
<div className="center-align">
<div className="blk input-field col s12">
<form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
<div>
<input type="text" 
       id="title" 
       autoComplete="off" 
       value={title} 
       onChange={(e) => this.handleChange(e)} 
       placeholder="Buscar..." 
       className="autocomplete center-align  white lighten-2 col l12 m12 s12" />
</div>
<button type="submit" className="btn active cyan darken-3">BUSCAR</button>
</form>
</div>
</div>
</div>
</nav>
</div>
); //fin del return
}; //fin del render
}; //fin de class

function mapStateToProps(state) {
return {
products: state.array
};
}; //fin del map

function mapDispatchToProps(dispatch) {
return {
obtenerProductos: (title) => dispatch(obtenerProductos(title))
};
}; //fin del map

export default connect(mapStateToProps, mapDispatchToProps)(Buscador);