import React from "react";
import classes from "./Cockpit.css";
// presentational component
//(stateless) functional component that does not manage state
//renders user interface

const cockpit = (props) => {
  const assignedClasses = [];
  let btnClass = "";
  if (props.showPersons) {
    btnClass = classes.red;
  }
  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red); //assignedClasses = ['red']
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold); // assignedClasses = ['red', 'bold']
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>This is really working!</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

export default cockpit;
