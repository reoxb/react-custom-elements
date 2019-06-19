import React, { Component } from "react";
import './web-components/hello-world'
import './web-components/button-example'
import './web-components/to-do-app'
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <hello-world/>
        <button-example/>
       <to-do-app></to-do-app>
      </div>
    );
  }
}

export default App;
