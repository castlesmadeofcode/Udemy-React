import React from 'react';
// in its simplest form a component is just a function that returns some JSX

// person = argument list, arrow, funciton body
const person = (props) => {
    // props has all properties of component (properties meaning attributes we add onto our component)
    return (
        <div>
            <p> I'm {props.name} and I am {props.age} years old!</p>
            {/* Use single curly brackets to execute one line expressions and functions */}
            <p>{props.children}</p>
            {/* children refers to any elements between the opening and closing tag of our component */}
        </div >
    );
};

export default person;
