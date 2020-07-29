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
    ]
  }

  // Handler is used to indicate this is a method you arnet actively calling, but assigning as an event handler
  switchNameHandler = () => {
    // console.log('Was clicked!')
    // DONT DO THIS this.state.persons[0].name = 'Maximilian'
    this.setState({
      persons: [
        { name: 'Maximilian', age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    })
    // the component object has a setState method which allows us to update the state property which updates the DOM
    // set state takes an object as an argument and will merge whatever we define within it with our existing state
  }


  render() {
    // React calls render to      | return/render something to the screen/DOM
    // every react component must ^

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        {/* dont add parenthesis, if we do this the function will be executed immediately once react
        renders to the dom, instead we pass a reference to the function (this.switchNameHandler)*/}
        <button onClick={this.switchNameHandler}>Switch Name</button>
        {/* this refers to the class */}
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}></Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}></Person>

      </div>
    );
    // JSX not hmtl^
    // gets compiled to:
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'does this work now?'))
  }
}


export default App;
// default export / if you import this whole file you import the (App) class
