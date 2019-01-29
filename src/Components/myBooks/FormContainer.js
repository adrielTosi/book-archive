import React from 'react'

export default class FormContainer extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            userInput: ''
        }
    }

    handleChange (e){
        let val = e.target.value
        this.setState({ userInput: val })
    }
    _handleSubmit(e){
        e.preventDefault()
        this.props.handleFetch(this.state.userInput)
    }

    render(){
    return (
        <div>
            <form onSubmit = {this._handleSubmit.bind(this)}>
                    
                <label htmlFor = 'books-name'>Name:  </label>
                <input
                id = 'books-name'  
                type = "text" 
                placeholder = "Book's name" 
                onChange = {this.handleChange.bind(this)}
                value = {this.state.userInput} />   
                

                <input type ="submit" value = "Search" />
            </form>
        </div>
    )
}
}