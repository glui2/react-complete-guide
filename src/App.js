import React, { Component, useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const app = props => {
  const [personsState, setPersonsState] = useState({
    // [currentState, functionToChangeState]
    persons: [
      { name: "Max", age: 28 },
      { name: "Gavin", age: 25 },
      { name: "Jason", age: 25 }
    ]
  });

  const [nameState, setNameState] = useState({
    // [currentState, functionToChangeState]
    persons: [
      { name: "Max", age: 28 },
      { name: "Gavin", age: 25 },
      { name: "Jason", age: 25 }
    ]
  });

  const switchNameHandler = () => {
    // can have nested functions
    console.log("Was clicked!");
    // DON'T do this: this.state.persons[0].name = "maxyyy";
    setPersonsState({
      persons: [
        { name: "Maxxxxy", age: 28 },
        { name: "Gavin", age: 29 },
        { name: "Jason", age: 230 }
      ]
    }); // would merge with existing data
  }; // method not actively being called, but an event handler

  const nameChangedHandler = event => {
    setNameState({
      persons: [
        { name: "Max", age: 28 },
        { name: event.target.value, age: 29 }, // assign to input name
        { name: "Jason", age: 230 }
      ]
    });
  };

  const [otherState, setOtherState] = useState("example");

  const style = {
    backgroundColor: "white",
    font: "inherit",
    border: "1px solid blue",
    padding: "8px",
    cursor: "pointer"
  };
  // console.log(personsState, setOtherState);

  return (
    <div className="App">
      <h1>Yo, I'm a React App</h1>
      <button style={style} onClick={() => switchNameHandler()}>
        Switch Name
      </button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
        click={switchNameHandler.bind(this, "MAX")}
      />
      <Person
        name={nameState.persons[1].name}
        age={personsState.persons[1].age}
        changed={nameChangedHandler}
      />
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      >
        My Hobbiess are gaming
      </Person>
    </div>
  );
};

export default app;
