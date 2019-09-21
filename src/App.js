import React, { Component } from 'react';

import './App.css';
import './CharacterCard'
import CharactorCard from './CharacterCard';
const word = "Hello";
class App extends Component {
  render() {
    return (
      <div className="App">
        <CharactorCard value='h'/>
        <CharactorCard value='i'/>
      </div>
    );
  }
}

export default App;
