import React, { Component } from 'react';

import List from './components/List';
import NewTask from './components/NewTask';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      myList: []
    }

    this.handleAddTask = this.handleAddTask.bind(this);
  }

  handleAddTask( task ) {
    const { myList } = this.state;
    this.setState({
      myList: [...myList, task]
    });
  }

  render() {
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <NewTask addTask={ this.handleAddTask } />
        <List tasks={ this.state.myList } />
      </div>
    );
  }
}

export default App;
