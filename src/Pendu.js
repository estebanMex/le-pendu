import React, { Component } from 'react';
import './Pendu.css';

class Pendu extends Component {

  render() {
    return (
      <div className={"Pendu " + this.props.currentState}>
        {/* <div className="repere" />
        <div className="repere2" /> */}
      </div>
    );
  }
}

export default Pendu;
