import React from "react";
import "./Person.css";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 60%;
  margin: 16px auto;
  border: 1px;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;

  @media (min-width: 500px) {
    width: 450px;
  }
`;

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
    <StyledDiv>
      <p onClick={props.click}>
        {" "}
        I'm {props.name} and I am {props.age} years old!
      </p>
      {/* Use single curly brackets to execute one line expressions and functions */}
      <p>{props.children}</p>
      {/* children refers to any elements between the opening and closing tag of our component */}
      <input type="text" onChange={props.changed} value={props.name} />
      {/* </div> */}
    </StyledDiv>
  );
};

export default Person;
