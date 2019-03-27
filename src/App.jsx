import React, { Component } from 'react';
import Column2D from './Column2D';
import Column3D from './Column3D';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container__charts">
            <Column2D />
        </div>
        <div className="container__charts">
            <Column3D />
        </div>
      </div>
    );
  }
}

export default App;
