import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      myList: ["This", "is", "a", "list", "( ͡° ͜ʖ ͡°)"]
    };
  }

  displayList(arr) {
    // let newArr = [];
    // for (let i = 0; i < arr.length; i++) {
    //   newArr.push(<h1 key={ i }>{ arr[i] }</h1>);
    // }

    let newArr = arr.map((val, i, arr) => <h1 key={ i }>{ val }</h1>);

    return newArr;
  }

  render() {

    return (
      <div className="App">
        { this.displayList(this.state.myList) }
      </div>
    );
  }
}

export default App;
