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
    this.handleAddHaveRead = this.handleAddHaveRead.bind(this)
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

    handleAddHaveRead(bookInfo){
        let newStorage, author, thumbnail
        let currentStorage = []

        if(localStorage.getItem('haveRead') !== null){ //check if haveRead exists
            currentStorage = JSON.parse(localStorage.getItem('haveRead'))
        }

        if(bookInfo.volumeInfo.authors === undefined){ // check if authors exists
            author = 'No Author'
        } else {
            author = bookInfo.volumeInfo.authors
        }

        if(bookInfo.volumeInfo.imageLinks === undefined){ //check if thumbnail exists
            thumbnail = 'NO BOOK COVER'
        } else {
            thumbnail = bookInfo.volumeInfo.imageLinks.thumbnail
        }

        let exists = currentStorage.some( ele => ele.id === bookInfo.id)

        if(!exists){
        newStorage = [...currentStorage,{
            id: bookInfo.id,
            volumeInfo: {
                authors: author, //if no author insert 'no author'
                imageLinks: {thumbnail: thumbnail} , // if no imageLinks insert NOCOVER -- NOT WORKING
                title: bookInfo.volumeInfo.title,
                pageCount: bookInfo.volumeInfo.pageCount,
                description: bookInfo.volumeInfo.description,
                language:bookInfo.volumeInfo.language , 
                publisher: bookInfo.volumeInfo.publisher, 
                publishedDate: bookInfo.volumeInfo.publishedDate, 
                categories:bookInfo.volumeInfo.categories

            }
        }]

        localStorage.setItem('haveRead', JSON.stringify(newStorage))
        }
    }


    render(){

        return (
            <div className = "addBooks-container">
                
                <FormContainer handleFetch = {this.handleFetch}/>

                <div className = 'map-bookcard'>
                    {this.props.userSearch.map((info, index) => (
                        <BookCard 
                            bookInfo = {info} //this info is in Redux State
                            key = {index}
                            canAddToHaveRead = {true} //change to canAddToHaveRead(opposite logic)
                            canDelete = {false}
                            handleAddHaveRead = {this.handleAddHaveRead }
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