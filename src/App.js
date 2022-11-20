import React, { Component } from "react";

import ParentCom from "./components/ParentCom";
//import MountPhase from "./components/MountPhase";
//import UpdatingPhase from "./components/UpdatingPhase";

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <MountPhase /> */}
        {/* <UpdatingPhase /> */}
        <ParentCom />
      </div>
    );
  }
}
