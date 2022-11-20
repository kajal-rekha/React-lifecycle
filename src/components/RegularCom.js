import React, { Component } from "react";

export default class RegularCom extends Component {
  render() {
    return (
      <div>
        <h1>This is a regular component:{this.props.number} </h1>
      </div>
    );
  }
}
