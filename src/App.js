import React, { Component } from "react";
import classes from "./App.css";
// css modules transforms classes into RNG unique class names
import Person from "./Person/Person";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";
// only use error boundaries for cases where you know it might fail and you can't control that
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
    let btnClass = [classes.button];

    if (this.state.showPersons) {
      // convert array of objects into valid jsx
      //function is executed on each element in the persons array and returns a person component
      persons = (
        <div>
          {/* map method exposes a second argument, index. */}
          {/* execute as an arrow function in order to pass index */}
          {this.state.persons.map((person, index) => {
            return (
              <ErrorBoundary key={person.id}>
                <Person
                  click={() => this.deletePersonHandler(index)}
                  name={person.name}
                  age={person.age}
                  changed={(event) => this.nameChangedHandler(event, person.id)}
                />
              </ErrorBoundary>
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

      btnClass.push(classes.red);
      console.log(btnClass);
    }

    let assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red); //assignedClasses = ['red']
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold); // assignedClasses = ['red', 'bold']
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={assignedClasses.join(" ")}>This is really working!</p>
        {/* passes an anonymous function which gets executed on click and returns the result of the function within getting executed */}
        <button
          className={btnClass.join(" ")}
          onClick={this.togglePersonsHandler}
        >
          Switch Name
        </button>
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
