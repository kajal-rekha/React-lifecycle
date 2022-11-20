import React, { Component } from "react";

class PureCom extends Component {
  render() {
    return (
      <div>
        <h1>This is a pure component:{this.props.number}</h1>
      </div>
    );
  }
}

export default PureCom;
