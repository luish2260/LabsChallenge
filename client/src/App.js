import React, { Component } from 'react';
//import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      query : null
    }
    this.onSearch = this.onSearch.bind(this);
  }

}

export default App;
