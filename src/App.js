import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const App = (props) => {
  // creates a new class object that inherits from Component class which is imported from the react library
  // Components are basically custom HTML elements


  // useState is the hook that allows us to manage state in a functional component
  // useState returns an array with exacly 2 elements, the first element is always the current state,
  // the second element is always a function that allows us to update the state
  const [personsState, setPersonsState] = useState({
    // personsState gives you acess to the persons object so we now use personsState instead of this.state
    // setPersonsState allows us to set a new state
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ]
  });


  // when using react hooks it is best practice to have multiple seperated state slices
  const [otherState, setOtherState] = useState('some other value')

  // Handler is used to indicate this is a method you arnet actively calling, but assigning as an event handler
  const switchNameHandler = () => {
    // console.log('Was clicked!')
    // DONT DO THIS personsState.persons[0].name = 'Maximilian'
    setPersonsState({
      persons: [
        { name: 'Maximilian', age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    })
    // the component object has a setState method which allows us to update the state property which updates the DOM
    // set state takes an object as an argument and will merge whatever we define within it with our existing state
    // **when using react hooks the function (setPersonsState) does not merge with old state, instead it replaces the old state**
  }


  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      {/* dont add parenthesis, if we do this the function will be executed immediately once react
        renders to the dom, instead we pass a reference to the function (this.switchNameHandler)*/}
      <button onClick={switchNameHandler}>Switch Name</button>
      {/* this refers to the class */}
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}></Person>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My Hobbies: Racing</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}></Person>

    </div>
  );
  // JSX not hmtl^
  // gets compiled to:
  // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'does this work now?'))
}


export default App;
// default export / if you import this whole file you import the (App) class


// props are set and passed from outside into the Person component, state is managed from within a component
// state property is only available in Components that extend Components so class based React Components
// if anything in state changes react will rerender/update the dom
// state = {
//   persons: [
//     { name: 'Max', age: 28 },
//     { name: 'Manu', age: 29 },
//     { name: 'Stephanie', age: 26 }
//   ]
// }


