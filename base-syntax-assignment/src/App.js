
import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';


class App extends Component {
  state = { username: 'gopal' }

  updateUserNameHandler = (newName) =>{
    this.setState({
      username: newName
    })
  }

  userNameChangeHandler = (event) =>{
    this.setState({
      username: event.target.value
    })
  }

  myStyle = {
    backgroundColor: 'green',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px'
  }

  render(){

    return (
      <div className="App">
        <div>
          <h1> hello  I am React App</h1>
          <p> This app demonstrates the basic react syntax</p>
          <button style={this.myStyle} onClick = {this.updateUserNameHandler.bind(this, 'Raju123')}>Change name</button>
        </div>

        <UserInput 
          username={this.state.username}
          change={this.userNameChangeHandler} >        
        </UserInput>
        <UserOutput 
          username={this.state.username}
          styleval={this.myStyle} >
        </UserOutput>      
        <UserOutput 
          username={this.state.username}
          styleval={this.myStyle} >
        </UserOutput>
      </div>
    );
  }
}

export default App;
