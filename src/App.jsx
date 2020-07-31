import React, { Component } from "react";
import "./App.css";
import Button from "./components/button";

class App extends Component {
  constructor() {
    super();
    this.state = {
      index: 0,
    };
    this.refEl = React.createRef();
  }

  increment() {
    let { index } = this.state;
    this.setState({ index: (index += 1) });
    const arr = [];
    arr.push({ deded: "ededed" });
  }

  render() {
    const { index } = this.state;
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2 ref={this.refEl}>Start editing to see some magic happen!</h2>
        <Button num={index} />
        <button
          type="button"
          onClick={() => {
            this.increment();
          }}
        >
          XXX
        </button>
      </div>
    );
  }
}

export default App;
