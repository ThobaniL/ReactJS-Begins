import React, { Component } from "react";
import Person from "./Person/Person";
import "./App.css";

class App extends Component {
  state = {
    persons: [
      { name: "Thobani", age: 28 },
      { name: "Tash", age: 33 },
      { name: "Sam", age: 30 },
    ],
    otherState: "some other state value",
  };

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: "Natasha", age: 33 },
        { name: "Sam ", age: 30 },
      ],
    });
  };

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: "Sikhulile", age: 28 },
        { name: event.target.value, age: 33 },
        { name: "Sam ", age: 30 },
      ],
      otherState: "some other state value",
    });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };

    return (
      <div className="App">
        <h1>Hi, I am React App</h1>
        <p>This is really working!</p>
        <button style={style} onClick={() => this.switchNameHandler("Thobs")}>
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Natasha")}
          changed={this.nameChangeHandler}
        >
          My hobbies: racing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
