import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {
  state = {username:"Tron"};

  changeNameHandler = (event) => {
    this.setState({username: event.target.value})
  };





  render() {
    const style = {
      margin: '16px',
      border: '8px',
      font: 'inherit',
      fontColor: 'red',
      background: 'grey'
    }
    return (
      <div className="App" style={style}>
        <UserInput
        userName={this.state.username}
        changed={this.changeNameHandler}/>
        <UserOutput/>
        <UserOutput/>
        <UserOutput
        style={style}
        userName={this.state.username}/>
      </div>
    );
  }
};

export default App;
