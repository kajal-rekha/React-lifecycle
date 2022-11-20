import React, { Component } from "react";
import PureCom from "./PureCom";
import RegularCom from "./RegularCom";

export default class ParentCom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 10,
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        // number: this.state.number + 10,
        number: 20,
      });
    }, 1000);
  }
  render() {
    console.log("parent");
    return (
      <div>
        <h1>This is a parent component</h1>
        <RegularCom number={this.state.number} />
        <PureCom number={this.state.number} />
      </div>
    );
  }
}
