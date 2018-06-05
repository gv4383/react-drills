import React, { Component } from 'react';

import Todo from "./components/Todo";
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      myList: [],
      userInput: ""
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.addToList = this.addToList.bind(this);
  }

  handleChange(event) {
    // console.log(event.target.value);
    this.setState({ userInput: event.target.value });
  }

  addToList() {
    this.setState({
      myList: this.state.myList.concat(this.state.userInput),
      // myList: [...this.state.myList, this.state.userInput],
      userInput: ""
    });
    console.log(this.state.myList);
  }

  render() {
    let newList = this.state.myList.map((val, i, arr) => {
      return (
        <Todo key={ i } task={ val } />
      );
    })

    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <input onChange={ this.handleChange } />
        <button onClick={ this.addToList }>Add</button>
        { newList }
      </div>
    );
  }
}

export default App;
