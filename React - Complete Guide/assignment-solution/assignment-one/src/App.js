import "./App.css";
import React, { Component } from "react";
import OutPut from "./UserOutput/UserOutput";
import UserInput from "./UserInput/UserInput";

class App extends Component {
  state = {
    username: "boza",
  };
  
  updateUserNameHandler = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  render() {
    return (
      <div className="App">
        <UserInput
          changed={this.updateUserNameHandler}
          userName={this.state.username}
        />
        <OutPut userName={this.state.username} />
        <OutPut userName="nemza" />
      </div>
    );
  }
}

export default App;
