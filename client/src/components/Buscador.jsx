import React, { Component } from 'react';
import { connect } from 'react-redux';
import { obtenerProductos } from '../redux/actions';
import { Button } from '@material-ui/core';

class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    };
  } //fin del constructor

  handleChange(e) {
    this.setState({ title: e.target.value });
  } //fin del change

  handleSubmit(e) {
    e.preventDefault();
    this.props.obtenerProductos(this.state.title);
  } //fin del submit

  render() {
    const { title } = this.state;
    return (
      <div>
        <nav className="row">
          <div className="blk col s8 push-s2">
            <div className="center-align">
              <div className="blk input-field col s12">
                <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
                  <div>
                    <input type="text"
                      id="title"
                      autoComplete="off"
                      value={title}
                      onChange={(e) => this.handleChange(e)}
                      placeholder="Ingrese búsqueda"
                      className="autocomplete center-align white lighten-2 col l12 m12 s12" />
                    <Button type="submit" color='primary' variant='contained'>BUSCAR</Button>
                  </div>
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
}; //fin del mapstate

function mapDispatchToProps(dispatch) {
  return {
    obtenerProductos: (title) => dispatch(obtenerProductos(title))
  };
}; //fin del mapdispatch

export default connect(mapStateToProps, mapDispatchToProps)(Buscador);