import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Catalogo from './components/Catalogo.jsx';
import Buscador from './components/Buscador.jsx';
import Footer from './components/Footer.jsx';
import { Provider } from 'react-redux';
import generateStore from './redux/store';

class App extends Component {
  render() {
    const store = generateStore();
    return (
      <Provider store={store}>
        <Router>
          <Route exact path="/" component={Buscador} />
          <Route path="/" render={() => <Catalogo state={this.state} />} />
          <Route exact path="/" component={Footer} />
        </Router>
      </Provider>
    );
  };
};

export default App;