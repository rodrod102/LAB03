import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './CharacterCard'
import CharactorCard from './CharacterCard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CharactorCard value='hello world'/>
      </div>
    );
  }
}

export default App;
