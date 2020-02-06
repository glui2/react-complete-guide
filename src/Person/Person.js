import React from "react";
import Radium from "radium";
import styled from "styled-components";
// import "./Person.css";

const StyledDiv = styled.div`
  width: 60%;
  margin: 16px auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #eee;
  padding: 16px;
  text-align: center;

  @media (min-width: 500px) {
    // for transformative styling, need StyleRoot
    width: 450px;
  }
`; // returns a react component

const person = props => {
  return (
    // <div className="Person" style={style}> // for radium
    // styled-components
    <StyledDiv>
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </StyledDiv>
  );
};
export default person;
