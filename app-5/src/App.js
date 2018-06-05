import React, { Component } from 'react';

import Image from "./components/Image";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image myImage={ "https://http.cat/409" } />
      </div>
    );
  }
}

export default App;
