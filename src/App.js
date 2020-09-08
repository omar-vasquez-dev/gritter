import React from "react";
import { Button } from "antd";
import "./App.css";
import ComponentTwo from "./components/demo/ComponentTwo";
import { ComponentOne } from "./components/demo/ComponentOne";

const App = () => (
  <div className="App">
    <ComponentOne name={"AndrianEL Clos"}></ComponentOne>
    <hr></hr>
    <ComponentTwo name={"Gabriel"}></ComponentTwo>
  </div>
);

export default App;
