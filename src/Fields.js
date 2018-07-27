import React, { Component } from 'react';
import './Fields.css';

class Fields extends Component {

  constructor(props) {
    super(props);

    this.state = {
      word: this.props.word,
      stateClass: ''
    }
  }

  componentWillReceiveProps() {
    console.log(this.props.word)
    this.setState({
      word: this.props.word
    });
  }

  render() {
    let wordArray = (this.state.word).split('');

    const listInputs = wordArray.map((number, i) =>
      <input type="text"
        className="Fields--lettre"
        key={i + (new Date()).getTime()}
        maxLength="1"
        onChange={this.check}
        placeholder="-"
        data-lettre={number}
      />
    )

    return (
      <div className="Fields">
        {listInputs}
      </div>
    );
  }

  check = (evt) => {
    let msg = '';
    let elem = evt.target;
    let lettre = elem.getAttribute('data-lettre');
    let input = elem.value;

    if (!input || input === ' ') {
      // si null on sort tout de suite
      elem.classList.remove('ko');
      return;
    }

    if (lettre === input) {
      elem.value = input;
      elem.setAttribute('disabled', true);
      elem.classList.remove('ko');
      elem.classList.add('ok');
      msg = 'ok';
      this.props.check({ 'msg': msg })
    } else {
      msg = 'ko';
      elem.classList.add('ko')
      this.props.check({ 'msg': msg })
    }

  }

}

export default Fields;
