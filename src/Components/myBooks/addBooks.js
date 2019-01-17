import React from 'react'
import './style.css'
import BookCard from './bookCard'
import { connect } from 'react-redux'
import  {changeSearch} from '../../Redux/actionCreator'

class AddBooks extends React.Component {
    constructor (props){
        super(props)

        this.state = { 
            userInput: '',
            listIsOpen: [false,false,false,false,false,false,false,false,false,false]
         }
    }

    handleChange (e){
        let val = e.target.value
        this.setState({ userInput: val })
    }

    handleSubmit (e){
        e.preventDefault()
        let val = this.state.userInput
        let ref = val.split(" ").join("+")
        let search = "https://www.googleapis.com/books/v1/volumes?q=" + ref
        fetch(search)
            .then(response => response.json())
            .then( data => this.props.changeSearch(data.items))
            .then(this.setState( { listIsOpen: [false,false,false,false,false,false,false,false,false,false]} ))
    }

    changeIsOpen (index){
        let newListIsOpen = this.state.listIsOpen
        newListIsOpen[index] = !newListIsOpen[index] 
        for(let i = 0; i < 10; i++){
            if(i !== index) newListIsOpen[i] = false 
        }
        this.setState( { listIsOpen: newListIsOpen } )
    }

    render(){
        return (
            <div className = "addBooks-container">
                <div>
                    <form onSubmit = {this.handleSubmit.bind(this)}>
                    
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

                <div className = 'map-bookcard'>
                    
                    {this.props.userSearch.map((info, index) => (
                        <BookCard 
                            key = {index}
                            bookInfo = {info}
                            index = {index}
                            state = {this.state.listIsOpen[index]}
                            changeIsOpen = {this.changeIsOpen.bind(this)}
                        />
                    ))}
                </div>
            </div>

        )
    }

}


function mapStateToProps (reduxState){
    return  { userSearch: reduxState.userSearch } 
}

export default connect(mapStateToProps, { changeSearch })(AddBooks)