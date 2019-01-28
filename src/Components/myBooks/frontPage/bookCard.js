import React from 'react'
import '../style.css'
import {Link} from 'react-router-dom'
import NOCOVER from '../../../NOCOVER.jpg'
import done from '../../../done.png'

//accepted props
//bookInfo: <-----
//  bookInfo.volumeInfo.authors : array
//  bookInfo.volumeInfo.imageLinks and .imageLinks.smallThumbnail: link
//  bookInfo.volumeInfo.id : string
//  bookInfo.volumeInfo.title: string
//  bookInfo.volumeInfo.pages : number
//  ------more info-----
//  bookInfo.volumeInfo.description : string
//  bookInfo.volumeInfo.language: string
//  bookInfo.volumeInfo.publisher : string
//  bookInfo.volumeInfo.categories: array
//index: index

//Boolean control props:
//haveRead: makes possible adding the book to haveRead list
//canDelete: makes possible deleting from the haveRead list

export default class BookCard extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            isAdded: false
        }
    }
   
    _handleDeleteFromHaveRead(){
        this.props.handleDeleteFromHaveRead(this.props.bookInfo.id)
    }

    _handleAddToHaveRead(){
        this.props.handleAddHaveRead(this.props.bookInfo)
        this.setState( { isAdded: true } )
    }

    componentDidMount(){
        let currentList = JSON.parse(localStorage.getItem('haveRead'))
        let exists = currentList.some(book => book.id === this.props.bookInfo.id)

        if(exists){
            this.setState( { isAdded: true } )
        }
    }
    render(){
        let authors,
            thumbnail
            
        // Handling author name
        if(this.props.bookInfo.volumeInfo.authors === undefined){
            authors = 'No Author'
        } else {
            authors = this.props.bookInfo.volumeInfo.authors.join(", ")
        }

        // Handling thumbnail image
        if(this.props.bookInfo.volumeInfo.imageLinks === undefined){
            thumbnail = <img src = {NOCOVER} alt = 'No book cover'></img>
        } else {
            thumbnail = <img src = {this.props.bookInfo.volumeInfo.imageLinks.thumbnail} alt = 'No book cover'></img>
        }
        return(
            <div className = 'individual-book-container' key = {this.props.bookInfo.id}>

                <div className = "book-card" >
                    <div>
                        {thumbnail}
                    </div>
                    <div>
                        <h4> {this.props.bookInfo.volumeInfo.title} </h4>
                        <h6> {authors} </h6>

                        <Link to = {{
                            pathname: '/info',
                            state: {
                                Info: this.props.bookInfo,
                                canAddToHaveRead: this.props.canAddToHaveRead, //change to canAddToHaveRead
                                handleAddHaveRead: this._handleAddHaveRead
                                //couldn't pass function props foward, but it worked when passing a internal function
                            }
                        }}>More...</Link>
                        <br/>
                        {this.props.canDelete === true && (
                            <button onClick = {this._handleDeleteFromHaveRead.bind(this)}>Delete</button>
                        )}
                        {this.props.canAddToHaveRead === true && (
                            <button onClick = {this._handleAddToHaveRead.bind(this)}>Add</button> //in future, two options, haveRead e WannaRead
                        )}

                        {this.state.isAdded === true && this.props.canAddToHaveRead === true && (
                            <span ><img src = {done} alt = 'added' className = 'done'></img></span>
                        )}

                    </div>
                </div>
            </div>
        )
    }
}