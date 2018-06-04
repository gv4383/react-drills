import React, { Component } from "react";

class Login extends Component {
  constructor() {
    super();

    this.state ={
      username: "",
      password: "",
    };

    this.handleUserChange = this.handleUserChange.bind(this);
    this.handlePassChange = this.handlePassChange.bind(this);
    this.alertStuff = this.alertStuff.bind(this);
  }

  handleUserChange(event) {
    this.setState({ username: event.target.value });
  }

  handlePassChange(event) {
    this.setState({ password: event.target.value});
  }

  alertStuff() {
    alert(`Username: ${ this.state.username} Password: ${ this.state.password }`);
  }

  render() {
    return(
      <div>
        <input onChange={ this.handleUserChange } />
        <input onChange={ this.handlePassChange } />
        <button onClick={ this.alertStuff }>Login</button>
      </div>
    )
  }
}

export default Login;