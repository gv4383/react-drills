import React, { Component } from 'react';

class NewTask extends Component {
  constructor() {
    super();

    this.state = {
      userInput: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleAddTask = this.handleAddTask.bind(this);
  }

  handleChange(event) {
    this.setState({
      userInput: event.target.value
    });
  }

  handleAddTask(task) {
    const { userInput } = this.state;
    task.preventDefault();

    this.props.addTask(userInput);
    this.setState({ userInput: '' });
  }

  render() {
    const { userInput } = this.state;

    return (
      <div>
        <form onSubmit={ this.handleAddTask }>
          <input
            value={ userInput }
            placeholder='Enter a new task!'
            onChange={ this.handleChange } />
          <button>Add!</button>
        </form>
      </div>
    );
  }
}

export default NewTask;