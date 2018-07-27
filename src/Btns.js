import React, { Component } from 'react';
import './Btns.css';

class Btns extends Component {
    
  render() {

    return (
      <div className="Btns">
        <div>
            <button onClick={this.props.resetPlay}> Reset </button>
        </div>
      </div>
    );
  }

}

export default Btns;
