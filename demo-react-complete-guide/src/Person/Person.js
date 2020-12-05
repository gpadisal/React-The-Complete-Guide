import React from 'react';
import './Person.css';

// Arrow function with no arguments. similar to lambda in java
// children in props.children is reserved word
const person = ( props ) => {
    
return (
    <div className="Person">
        <p onClick = {props.click} >This is a {props.name} and {props.age} years old ! </p>
        
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value = {props.name}/>

    </div>


)
}

export default person;