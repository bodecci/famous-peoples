import React, { Component } from 'react';
import './App.css';
import FamousForm from './components/FamousForm.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>Famous Peoples</h1>
        </header>
        <FamousForm />
      </div>
    );
  }
}

export default App;
