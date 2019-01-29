import fire from './config/fire'
import React, { Component } from 'react';
import './App.css';

import Header from './Components/Header/Header.js'
import Main from './Components/myBooks/Main'
import Login from './Components/Authentication/login'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      user: {}
    }

    this.authListener = this.authListener.bind(this)
  }

  authListener(){
    fire.auth().onAuthStateChanged ( user => {
      if(user){
        this.setState ( { user: user })
      }else {
        this.setState( { user: null } )
      }
    })
  }

  componentDidMount(){
    this.authListener()
  }

   render() {
    return (
    <div>
      <Header/>
      { this.state.user ? (<Main/>) : (<Login/>) }
    </div>
    )
}
}

export default App;
