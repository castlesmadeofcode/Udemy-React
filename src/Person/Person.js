import React from "react";
import classes from "./Person.css";

// in its simplest form a component is just a function that returns some JSX

// person = argument list, arrow, function body
const Person = (props) => {
  // props has all properties of component (properties meaning attributes we add onto our component)
  const style = {
    "@media(min-width:500px)": {
      width: "450px",
    },
  };

  return (
    // <div className="Person" style={style}>
    <div className={classes.Person}>
      <p onClick={props.click}>
        {" "}
        I'm {props.name} and I am {props.age} years old!
      </p>
      {/* Use single curly brackets to execute one line expressions and functions */}
      <p>{props.children}</p>
      {/* children refers to any elements between the opening and closing tag of our component */}
      <input type="text" onChange={props.changed} value={props.name} />
      {/* </div> */}
    </div>
  );
};

export default Person;
