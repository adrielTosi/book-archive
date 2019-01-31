import React from 'react'
import fire from '../../config/fire'
import '../../Components/myBooks/style.css'
import Signup from './Signup'

export default class Login extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            signup: false,
            email: '',
            password: ''
        }
    this.handleSignUp = this.handleSignUp.bind(this)
    }

    handleSignUp(){
        this.setState( { signup:!this.state.signup } )
    }

    handleChange(e){
        this.setState( { [e.target.name]: e.target.value } )
    }

    login (e){
        e.preventDefault()
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password) //promisse
            .catch(error => console.log(error))
    }
   

    render(){
        return (
            <div>
                {this.state.signup 
                ?  (<Signup handleSignUp = {this.handleSignUp}/>)
                : (
                    <form>
                    <div className = 'email'>
                        <label htmlFor = 'emailInput' >Email Address: </label>
                        <input 
                        value = {this.state.email} 
                        onChange = {(e)=> this.handleChange(e)}
                        type = 'email'
                        name = 'email'
                        id = 'emailInput'
                        placeholder = 'Enter email address'
                        ></input>
                    </div>

                    <div className = 'password'>
                        <label htmlFor = 'passwordInput' >Password: </label>
                        <input 
                        value = {this.state.passoword} 
                        onChange = {(e)=> this.handleChange(e)}
                        type = 'password'
                        name = 'password'
                        id = 'passwordInput'
                        placeholder = 'Enter password'
                        ></input>
                    </div>
                    <button type = 'submit' onClick = {this.login.bind(this)}>Login</button>
                    <button className = 'link-button'onClick = {this.handleSignUp}>Or sign up...</button>
                </form>
                )}
            </div>
        )
    }
}