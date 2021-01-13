import React from "react";
import Person from "./Person/Person";

// if you only have one line as a function body you can omit the return statement
const persons = (props) =>
  props.persons.map((person, index) => {
    return (
      <Person
        click={() => props.clicked(index)}
        name={person.name}
        age={person.age}
        key={person.id}
        changed={(event) => props.changed(event, person.id)}
      />
    );
  });

/* we assign a key property to allow react to keep track of the individual elements 
         so that it has a clear property it can compare between the different elements to
         found out which element changed and which didnt so that it only rerenders the elements that 
         did change and not the whole list */

export default persons;
