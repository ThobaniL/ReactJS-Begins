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
  };

  switchNameHandler = () => {
    //console.log("was clicked");
    this.setState({
      persons: [
        { name: "Thobani", age: 28 },
        { name: "Natasha", age: 33 },
        { name: "Sam", age: 30 },
      ],
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I am React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
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
