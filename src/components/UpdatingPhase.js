import React, { Component } from "react";

export default class UpdatingPhase extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "kajal",
    };
    console.log("constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(previousProps, previousState) {
    console.log("getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
    return null;
  }
  updateState = () => {
    this.setState({
      name: "Tumpa",
    });
  };
  render() {
    console.log("render");
    return (
      <div>
        <button onClick={this.updateState}>update state</button>
      </div>
    );
  }
}
