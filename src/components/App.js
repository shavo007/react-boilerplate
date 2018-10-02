import React, { Component } from "react";
import Foo from "./Foo";
import BasicExample from "./BasicExample";

class App extends Component {
  render() {
    return (
      <div>
		  <Foo />
		  <BasicExample />
      </div>
    );
  }
}

export default App;
