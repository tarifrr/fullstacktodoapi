import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddToDo from './components/AddToDo';

class App extends Component {

  constructor(props){
    super(props);
  }

  

  render() {
    return (
      <div>
        <h1 className="title"> Full Stack ToDo App </h1>
        <div>
        <AddToDo/>
        </div>
      </div>
    );
  }
}

export default App;
