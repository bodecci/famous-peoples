import React, { Component } from 'react';
import './App.css';
import FamousForm from './components/FamousForm.js';
import FamousList from './components/FamousList.js';

class App extends Component {

  constructor(){
    super();
    this.state = {
      famousPeople: [],
    }
  }

  addFamousPersonToList = (famousPerson) => {
    console.log('IN App.js addFamousPersonToList() with ', famousPerson);
    
    this.setState({
      famousPeople: [...this.state.famousPeople, famousPerson],
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>Famous Peoples</h1>
        </header>
        {/* addFamousPersonTOList is passes via props*/}
        <FamousForm addFamousPersonToList={this.addFamousPersonToList}/>
        {JSON.stringify(this.state.famousPeople)}
        <FamousList famousPeople={this.state.famousPeople} />
      </div>
    );
  }
}

export default App;
