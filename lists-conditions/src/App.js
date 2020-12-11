import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './ValidationComponent/CharComponent';

class App extends Component {

  //**** state or props, if one of these fields are changed, the Dom will be updated.
  // state property is reserved word only avaible in class extending Component
  // Initial state
  state = {
    textinput : 'gopal',
    textlength: 'gopal'.length,
  };

  displayTextHandler = (event) => {
    let textVal = event.target.value;
    this.setState({ 
      textinput : textVal,
      textlength: textVal.length
    });
  }

  deleteCharHandler = (index) => {
    const textinput = this.state.textinput.split('');
    textinput.splice(index, 1);
    const newText = textinput.join('');
    this.setState({textinput : newText}) 

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

    //const charArray = [...this.state.textinput];

    let charComponents =  this.state.textinput.split('').map((ch, index) => { 
                return <CharComponent 
                  name={ch} 
                  key={index}  // we need key property in the list to identify the record in list uniquely.
                  click={() => this.deleteCharHandler(index)}  // () => function(arguments)
                />
              });          


    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>Lists and Conditions Example</p>
        <input type="text" onChange={this.displayTextHandler} value = {this.state.textinput}/>

        <p>{this.state.textinput}: {this.state.textlength}</p>
        <ValidationComponent textlength={this.state.textlength}></ValidationComponent>
        {charComponents}

      </div>      
    );

    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'I am a React App !!!!'));

  }
}

export default App;
