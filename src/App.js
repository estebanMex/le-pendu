import React, { Component } from 'react';
import Pendu from './Pendu';
import Fields from './Fields';
import Btns from './Btns';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.words = [
      'avion',
      'voiture',
      'velo',
      'train',
      'paquebot',
      'peniche'
    ];

    this.state = {
      'errors': 0,
      'maxErrors': 11,
      'currentState': '',
      'word': this.getWord()
    }

  }

  resetPlay = () => {
    let newWord = this.getWord();
    if(this.state.word == newWord) {
      newWord = this.getWord()
    }

    console.log('reset newWord', newWord)
    
    this.setState({
      'currentState': '',
      'errors': 0,
      'word': newWord 
    })
  }

  check = (msg) => {
    if (msg.msg === 'ko') {
      this.updateWrong();
    }
    if (this.state.errors === this.state.maxErrors) {
      alert('tu as perdu!');
      return;
    }
  }

  getWord() {
      let ramdom = Math.floor(Math.random() * this.words.length)
      let word = this.words[ramdom]
      return word;
  }

  updateWrong() {
    let errors = this.state.errors + 1;
    this.setState({
      'currentState': 'Pendu_' + errors,
      'errors': errors
    })
    console.log(this.state.errors, this.state.currentState)
  }

  render() {
    return (
      <div className="App">
        <Pendu currentState={this.state.currentState} />
        <Fields word={this.state.word} check={this.check} />
        <Btns resetPlay={this.resetPlay}/>
      </div>
    );
  }

}

export default App;
