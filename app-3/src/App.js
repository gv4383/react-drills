import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      userInput: "",
      myList: [
        "This",
        "is",
        "a",
        "list",
        "( ͡° ͜ʖ ͡°)"
      ]
    };

    this.handleChange = this.handleChange.bind(this);
    this.filterItem = this.filterItem.bind(this);
  }

  handleChange(event) {
    // console.log(event.target.value);
    this.setState({ userInput: event.target.value });
  }

  filterItem(arr, str) {
    let filteredArr = this.state.myList.filter((val, i, arr) => val.includes(str));
    let newArr = filteredArr.map((val, i, arr) => <h1 key={ i }>{ val }</h1>)
    return newArr;
  }

  render() {
    return (
      <div className="App">
        <input onChange={ this.handleChange } />
        { this.filterItem(this.state.myList, this.state.userInput) }
      </div>
    );
  }
}

export default App;
