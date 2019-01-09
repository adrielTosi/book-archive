import React, { Component } from 'react';
import './App.css';
import AddBooks from './Components/myBooks/addBooks.js'


class App extends Component {
  render() {
    return (
      <div className="App">
        <AddBooks />    
      </div>
    );
  }
}

export default App;
