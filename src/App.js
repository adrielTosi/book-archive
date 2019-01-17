
import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header.js'
import Main from './Components/myBooks/Main'

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Main/>  
      </div> 
    );
  }
}

export default App;
