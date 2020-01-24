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
      ],
      showPersons: true
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

  const togglePersonsHandler = () => {
    const doesShow = personsState.showPersons;
    setPersonsState({
      persons: [
        { name: "Max", age: 28 },
        { name: "Gavin", age: 25 },
        { name: "Jason", age: 25 }
      ],
      showPersons: !doesShow
    });
  };

  const deletePersonHandler = personIndex => {
    const persons = personsState.persons;
    persons.splice(personIndex, 1);
    setPersonsState({
      persons: persons,
      showPersons: personsState.showPersons
    });
  };

  const [otherState, setOtherState] = useState("example");

  const style = {
    backgroundColor: "white",
    font: "inherit",
    border: "3px solid blue",
    padding: "8px",
    cursor: "pointer"
  };
  // console.log(personsState, setOtherState);
  let persons = null;

  if (personsState.showPersons) {
    // cleaner way to manage terniary operations
    persons = (
      <div>
        {personsState.persons.map((person, index) => {
          return (
            <Person
              click={() => deletePersonHandler(index)}
              name={person.name}
              age={person.age}
            />
          );
        })}
      </div>
    );
  }

  return (
    <div className="App">
      <h1>Yo, I'm a React App</h1>
      <button style={style} onClick={() => togglePersonsHandler()}>
        Toggle Persons
      </button>
      {persons} {/*render either nothing, or the persons block */}
    </div>
  );
};

export default app;
