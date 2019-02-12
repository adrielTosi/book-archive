import fire from './config/fire'
import React, { Component } from 'react';
import './SASS/App.scss'

import Main from './Components/myBooks/Main'
import Login from './Components/Authentication/login'
import Logo from './Images/Logo.png'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      user: null,
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

  componentDidMount(){ //put a loading 
    this.authListener()
  }

  
   render() {
    return (
    <div className = 'App'>

      { this.state.user ? (<Main/>) : 
        (
        <div className = 'LogoScreen'>
          <div id = 'logo-image'> <img src = {Logo} alt = 'No Logo' className = 'logo-image'/> </div>
          <Login/>
        </div>
        )
      }
    </div>
    )
  }
}


export default App;
