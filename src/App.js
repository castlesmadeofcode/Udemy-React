import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  // creates a new class object that inherits from Component class which is imported from the react library
  // Components are basically custom HTML elements


  // props are set and passed from outside into the Person component, state is managed from within a component
  // state property is only available in Components that extend Components so class based React Components
  // if anything in state changes react will rerender/update the dom
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    showPersons: false
  }

  // Handler is used to indicate this is a method you arnet actively calling, but assigning as an event handler
  switchNameHandler = (newName) => {
    // console.log('Was clicked!')
    // DONT DO THIS this.state.persons[0].name = 'Maximilian'
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    })
    // the component object has a setState method which allows us to update the state property which updates the DOM
    // set state takes an object as an argument and will merge whatever we define within it with our existing state
  }


  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 26 }
      ]
    })
  }


  // we use an arrow function so 'this' always returns to this class
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow })

  }


  render() {
    // React calls render to      | return/render something to the screen/DOM
    // every react component must ^

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        {/* passes an anonymous function which gets executed on click and returns the result of the function within getting executed */}
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Switch Name</button>
        {/* /* this refers to the class  */}

        {/* if showPersons = true display the div else render null/nothing */}
        {
          this.state.showPersons ?
            < div >
              <Person name={this.state.persons[0].name}
                age={this.state.persons[0].age}></Person>
              <Person name={this.state.persons[1].name}
                age={this.state.persons[1].age}
                // bind (this) and list of arguments that get passed into our function (switchNameHandler(newName))
                click={this.switchNameHandler.bind(this, 'Max')}
                // add a new property (click) and pass reference to the function (this.switchNameHandler) you want to pass as props
                changed={this.nameChangedHandler}>My Hobbies: Racing</Person>
              <Person name={this.state.persons[2].name}
                age={this.state.persons[2].age}></Person>
            </div >
            : null
        }
      </div>
    );
    // JSX not hmtl^
    // gets compiled to:
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'does this work now?'))
  }
}


export default App;
// default export / if you import this whole file you import the (App) class
