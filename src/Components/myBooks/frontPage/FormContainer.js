import React from 'react'
import '../../../SASS/App.scss'
import magnifier from '../../../Images/magnifier.svg'

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
            <form className = 'search-form' onSubmit = {this._handleSubmit.bind(this)}>
                    
                <input
                id = 'books-name'  
                type = "text" 
                placeholder = "Book's name" 
                onChange = {this.handleChange.bind(this)}
                value = {this.state.userInput} />   
                

                <button type ="submit"><img className = 'search-img' src = {magnifier} alt = 'search'/></button>
                <p>Search for books you have read, click the add button to add to your list.</p>
            </form>
        </div>
    )
}
}