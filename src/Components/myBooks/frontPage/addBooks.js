import React from 'react'
import '../style.css'
import BookCard from './bookCard'
import { connect } from 'react-redux'
import  {changeSearch} from '../../../Redux/actionCreator'
import FormContainer from './FormContainer'

class AddBooks extends React.Component {
    constructor (props){
        super(props)

    this.handleFetch = this.handleFetch.bind(this)
    }


    handleFetch (userInput){
        if(userInput !== ''){
            let ref = userInput.split(" ").join("+")
            let search = "https://www.googleapis.com/books/v1/volumes?q=" + ref
            fetch(search)
                .then(response => response.json())
                .then(data => this.props.changeSearch(data.items))
        }
    }


    render(){

        return (
            <div className = "addBooks-container">
                
                <FormContainer handleFetch = {this.handleFetch}/>

                <div className = 'map-bookcard'>
                    {this.props.userSearch.map((info, index) => (
                        <BookCard 
                            bookInfo = {info}
                            key = {index}
                            haveRead = {false}
                            canDelete = {false}
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