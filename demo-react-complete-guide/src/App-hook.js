import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = (props) => {
    // following destruring retrieves 2 arguments
    // First one the current state
    // 2nd argument is the function that modifies the state
    const [personsState, setPersonsState] = useState({
      persons : [
        { name: 'gopal', age: 29},
        { name: 'Manu', age: 28},
        { name: 'Stephanie', age: 26}   
      ]
    });

    const switchNameHandler = () => {
      //console.log('The handler is clicked !');
      //Dont change the state like this    this.state.persons[0].name = 'Gopalrao Padisala';
  
      setPersonsState({
        persons : [
          { name: 'gopalrao', age: 40},
          { name: 'Manu1', age: 31},
          { name: 'Stephanie1', age: 28}   
        ]
        }
      )
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name = {personsState.persons[0].name} age = {personsState.persons[0].age}/>
        <Person name = {personsState.persons[1].name} age = {personsState.persons[1].age}>My Hobbies Racing!</Person>
        <Person name = {personsState.persons[2].name} age = {personsState.persons[2].age}/>

      </div>      
    );

    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'I am a React App !!!!'));

}

export default app;
