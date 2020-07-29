import React, { Component } from "react";
import { Greet } from "./Components/Greet";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Greet />
      </div>
    );
  }
}

export default App;
