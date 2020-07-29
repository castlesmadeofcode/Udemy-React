import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  // creates a new class object that inherits from Component class which is imported from the react library
  // Components are basically custom HTML elements
  render() {
    // React calls render to      | return/render something to the screen/DOM
    // every react component must ^

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <Person name="Max" age="28"></Person>
        <Person name="Manu" age="29">My Hobbies: Racing</Person>
        <Person name="Stephanie" age="26"></Person>

      </div>
    );
    // JSX not hmtl^
    // gets compiled to:
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'does this work now?'))
  }
}


export default App;
// default export / if you import this whole file you import the (App) class
