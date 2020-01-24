import React, { Component, useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const app = props => {
  const [personsState, setPersonsState] = useState({
    // [currentState, functionToChangeState]
    persons: [
      { id: "a", name: "Max", age: 28 },
      { id: "b", name: "Gavin", age: 25 },
      { id: "c", name: "Jason", age: 25 }
    ],
    showPersons: true
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

  const nameChangedHandler = (event, id) => {
    const personIndex = personsState.persons.findIndex(p => {
      // return true or false if it is the element i was looking for
      return p.id === id;
    });

    const person = {
      //alternatively: const person = Object.assign({}, personsState.persons[personIndex])
      ...personsState.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...personsState.persons];
    persons[personIndex] = person;

    setPersonsState({
      persons: persons,
      showPersons: true
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
    // const persons = personsState.persons.slice(); // create a copy of array before manipulating
    const persons = [...personsState.persons]; // spread out elements into an array
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
              key={person.id}
              changed={event => nameChangedHandler(event, person.id)}
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
