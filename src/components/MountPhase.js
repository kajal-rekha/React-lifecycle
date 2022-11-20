import React, { Component } from "react";

export default class MountPhase extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    console.log("constructor ran");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDeriveStateFromProps ran");
    return null;
  }

  componentDidMount() {
    console.log("componentDidMount ran");
  }
  render() {
    console.log("render ran");
    return <div>MountPhase</div>;
  }
}
