// App container manages and manipulates the state
//container is a term for a component that manages state
import React, { Component } from "react";
import classes from "./App.css";
// css modules transforms classes into RNG unique class names
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
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

    let persons = null;

    if (this.state.showPersons) {
      // convert array of objects into valid jsx
      //function is executed on each element in the persons array and returns a person component
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );
    }

    return (
      <div className={classes.App}>
        <Cockpit
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />
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
