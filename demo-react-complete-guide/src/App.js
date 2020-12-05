import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  //**** state or props, if one of these fields are changed, the Dom will be updated.
  // state property is reserved word only avaible in class extending Component
  // Initial state
  state = {
    persons : [
      { name: 'gopal', age: 29},
      { name: 'Manu', age: 28},
      { name: 'Stephanie', age: 26}   
    ]
  };

  //when you call the method with out arguments, don't add paranthesis, the function immediately called.
  //this.switchNameHandler  - no paramthesis
  switchNameHandler = (newName) => {
    //console.log('The handler is clicked !');
    //Dont change the state like this    this.state.persons[0].name = 'Gopalrao Padisala';

    //change the state
    this.setState({
      persons : [
        { name: newName, age: 40},
        { name: 'Manu1', age: 31},
        { name: 'Stephanie1', age: 28}   
      ]
    }
    )
  }

  nameChangedHandler = (event) => {
    //console.log('The handler is clicked !');
    //Dont change the state like this    this.state.persons[0].name = 'Gopalrao Padisala';

    //change the state
    this.setState({
      persons : [
        { name: 'Gopal', age: 40},
        { name: event.target.value, age: 31},
        { name: 'Stephanie1', age: 28}   
      ]
    }
    )
  }


  //standard method to render the component
  // use onClick with capital C
  // there are 2 ways to pass parameter to switchNameHandler handler 
  // 1. () => this.switchNameHandler('GopalPadisala!!!')
  // 2. this.switchNameHandler.bind(this, 'abcdes')
  render() {

    const style = {
      backGroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button 
          style={style}
          onClick={() => this.switchNameHandler('GopalPadisala!!!')}>Switch Name
        </button>
        <Person 
          name = {this.state.persons[0].name} 
          age = {this.state.persons[0].age} />
        <Person 
          name = {this.state.persons[1].name} 
          age = {this.state.persons[1].age} 
          click = {this.switchNameHandler.bind(this, 'abcdes')}
          changed = {this.nameChangedHandler} >My Hobbies Racing!</Person>
        <Person 
          name = {this.state.persons[2].name} 
          age = {this.state.persons[2].age} />
      </div>      
    );

    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'I am a React App !!!!'));

  }
}

export default App;
