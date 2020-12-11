import React, { Component } from 'react';
import './App.css';
import person from './Person/Person';
import Person from './Person/Person';

class App extends Component {

  //**** state or props, if one of these fields are changed, the Dom will be updated.
  // state property is reserved word only avaible in class extending Component
  // Initial state
  state = {
    persons : [
      { id: 'gopal1',  name: 'gopal', age: 29},
      { id: 'manu1',  name: 'Manu', age: 28},
      { id: 'step1', name: 'Stephanie', age: 26}   
    ],
    showPersons : false
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

  nameChangedHandler = (event, id) => {
    //console.log('The handler is clicked !');
    //Dont change the state like this    this.state.persons[0].name = 'Gopalrao Padisala';

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const thisPerson = {
      ...this.state.persons[personIndex]
    }; // copy the object to new person instance.

    thisPerson.name = event.target.value; // set the value from text input

    //get copy of persons
    const persons = [...this.state.persons];
    persons[personIndex] = thisPerson;

    //change the state
    this.setState({persons : persons}
    )
  }


  deletePersonHandler = (index) =>{
    //const persons = this.state.persons; // refers to the original array.
    // we can also use slice to copy the elements to new array const persons = this.state.persons.slice()
    const persons = [...this.state.persons];  //modern: spread operator copies the elements from old array to new array.
    persons.splice(index, 1); // delete one element from index     it is sPlice  not slice 
    this.setState({persons : persons}) // assing the updated persons array to persons object in state again
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons : !doesShow
    })

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

    let persons = null;

    if(this.state.showPersons){
      persons = (
          <div>
            {
              this.state.persons.map((person, index) => {   // map function can receive person object and its index 
                return <Person 
                  name={person.name} 
                  age={person.age} 
                  key={person.id}  // we need key property in the list to identify the record in list uniquely.
                  click={() => this.deletePersonHandler(index)}  // () => function(arguments)
                  changed = {(event) => this.nameChangedHandler(event, person.id)}
                />
              })
            }
          </div>
      )

    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Switch Name
        </button>
        {persons} 

      </div>      
    );

    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'I am a React App !!!!'));

  }
}

export default App;
