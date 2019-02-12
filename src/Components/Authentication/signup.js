import React from 'react'
import fire from '../../config/fire'
import '../../SASS/App.scss'

export default class Singup extends React.Component {
    constructor (){
        super()
        this.state = { 
            user: {},
            username: '',
            email: '',
            password:'',
            error:{
                exists: false,
                message: ''
            }
        }
    }

    handleChange(e){
        this.setState( { [e.target.name]: e.target.value } )
    }

    signup(e){
        e.preventDefault()
        fire.database().ref('/').once("value")
        .then((data) => {
            let allUsers = Object.keys(data.val())
            if(!allUsers.includes(this.state.username)){
                fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
                .then(data =>{
                    const {user} = data
                    if(user){  
                        user.updateProfile({
                            displayName: this.state.username
                        })
                    }
                })
                .catch((error) => this.setState( { error:{ exists: true, message: error.message } } ))
            }else{
                throw new Error('username already exists')
            }
        })
        .catch( (error) =>
            this.setState( { error:{ exists: true, message: error.message } } )
         )
        
        
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
    
    _handleSignUp(){
        this.props.handleSignUp()
    }

    render(){
        const error = this.state.error.exists
        const message = this.state.error.message
        return (
            <div id = 'sign-form'>
                <form onSubmit = {this.signup.bind(this)}>
                    <div className = 'username'>
                            <label htmlFor = 'UsernameInput' >Username: </label>
                            <input 
                            value = {this.state.username} 
                            onChange = {(e)=> this.handleChange(e)}
                            type = 'Username'
                            name = 'username'
                            id = 'UsernameInput'
                            placeholder = 'Enter Username'
                            ></input>

                    </div>

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

                        {error &&(
                            <p>{message}</p>
                        )}
                    </div>

                    <button type = 'submit' className = 'login-bt'>Sign Up</button>
                </form>
                <button className = 'link-button' onClick = {this._handleSignUp.bind(this)}>Already have an account</button>
            </div>
        )
    }
}