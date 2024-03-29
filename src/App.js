import React from 'react';
import CharacterCard from './CharacterCard';
import './App.css';
import _ from 'lodash';

let message = 'Hello'

const prepareStateFromWord = (given_word) => {
  let word = given_word.toUpperCase()
  let chars = _.shuffle(Array.from(word))
  return {
    word,
    chars,
    attempt: 0,
    guess: [],
    completed: false
  }
}
class App extends React.Component {
  state = prepareStateFromWord(message);
  activationHandler = (c) => {
    let guess = [...this.state.guess, c]
    this.setState({ guess })
    if (guess.length == this.state.chars.length) {
      if (guess.join('').toString() == this.state.word) {
        this.setState({ guess: [], completed: true })
        this.setState({ guess: [], completed: this.state.completed + 1 }) //เมื่อตอบถูกให้หลัง completed +1
      } else {
        this.setState({ guess: [], completed: false }) //เมื่อ ตอบผิดจะไม่แสดง completed
        this.setState({ guess: [], attempt: this.state.attempt + 1 })
      }
    }

  }
  render() {
    return (
      <div>
        {
          Array.from(this.state.chars).map((item, index) => (
            <CharacterCard
              value={item}
              key={index}
              activationHandler={this.activationHandler}
            />
          ))
        }
        <h2>Selected</h2>
        {
          Array.from(this.state.guess).map((item, index) => (
            <CharacterCard
              value={item}
              key={index}
              activationHandler={this.activationHandler}
            />
          ))
        }
        <div>Attemp {this.state.attempt}</div>
        {
          this.state.completed && <h4>Complete{this.state.completed} </h4>
        }
      </div>
    )
  }
}

export default App;