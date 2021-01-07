import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import styled from "styled-components";
// import Radium, { StyleRoot } from "radium";
//wrap return stament in StyleRoot component for advanced features such as media queries

// Radium allows us to use inline styles with seudo selectors and media queries within react

//styled component uses regular CSS syntax
// if alt = true return red if false return green
const StyledButton = styled.button`
      background-color: ${(props) => (props.alt ? "red" : "green")};
      font: inherit;
      border: 1px solid blue;
      padding: 8px;
      cursor: pointer;

      &:hover {
        background-color: ${(props) => (props.alt ? "salmon" : "lightgreen")};
        color: black;
`;

class App extends Component {
  // creates a new class object that inherits from Component class which is imported from the react library
  // Components are basically custom HTML elements

  // props are set and passed from outside into the Person component, state is managed from within a component
  // state property is only available in Components that extend Components so class based React Components
  // if anything in state changes react will rerender/update the dom
  state = {
    persons: [
      { id: "a", name: "Max", age: 28 },
      { id: "b", name: "Manu", age: 29 },
      { id: "c", name: "Stephanie", age: 26 },
    ],
    showPersons: false,
  };

  // Handler is used to indicate this is a method you arnet actively calling, but assigning as an event handler
  deletePersonHandler = (personIndex) => {
    // [...] spread operator creates copy of an array
    // always update state in an immutable fashion, create a copy change that than update the state
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });

    // the component object has a setState method which allows us to update the state property which updates the DOM
    // set state takes an object as an argument and will merge whatever we define within it with our existing state
  };

  nameChangedHandler = (event, id) => {
    // find
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex],
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  // we use an arrow function so 'this' always returns to this class
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    // if doesShow is true set showPersons to false if doesShow is true set showPersons to false
    this.setState({ showPersons: !doesShow });
  };

  render() {
    // React calls render to      | return/render something to the screen/DOM
    // every react component must ^

    // const style = {
    //   backgroundColor: "green",
    //   font: "inherit",
    //   border: "1px solid blue",
    //   padding: "8px",
    //   cursor: "pointer",
    //   ":hover": {
    //     backgroundColor: "lightgreen",
    //     color: "black",
    //   },
    // };

    let persons = null;

    if (this.state.showPersons) {
      // convert array of objects into valid jsx
      //function is executed on each element in the persons array and returns a person component
      persons = (
        <div>
          {/* map method exposes a second argument, index. */}
          {/* execute as an arrow function in order to pass index */}
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangedHandler(event, person.id)}
              />
            );

            {
              /* we assign a key property to allow react to keep track of the individual elements 
         so that it has a clear property it can compare between the different elements to
         found out which element changed and which didnt so that it only rerenders the elements that 
         did change and not the whole list */
            }
          })}
        </div>
      );

      // style.backgroundColor = "red";
      // style[":hover"] = {
      //   backgroundColor: "salmon",
      //   color: "black",
      // };
    }

    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red"); //classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold"); // classes = ['red', 'bold']
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(" ")}>This is really working!</p>
        {/* passes an anonymous function which gets executed on click and returns the result of the function within getting executed */}
        <StyledButton
          alt={this.state.showPersons}
          onClick={this.togglePersonsHandler}
        >
          Switch Name
        </StyledButton>
        {/* /* this refers to the class  */}
        {persons}
      </div>
    );
    // JSX not hmtl^
    // gets compiled to:
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'does this work now?'))
  }
}

export default App;
// default export / if you import this whole file you import the (App) class
