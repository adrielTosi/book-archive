import React from 'react'
import '../style.css'
import NOCOVER from '../../../NOCOVER.jpg'
import done from '../../../done.png'
import MoreInfo from './moreInfo'

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
            isAdded: false,
            toggleInfo: false
        }
    this._handleAddToHaveRead = this._handleAddToHaveRead.bind(this)
    }
   
    _handleDeleteFromHaveRead(){
        this.props.handleDeleteFromHaveRead(this.props.bookInfo.volumeInfo.id) //this ID comes directly from Google Books API
        this.setState( { isAdded: true } )
    }


    _handleAddToHaveRead(){
        this.props.handleAddToHaveRead(this.props.bookInfo)
        //this.setState( { isAdded: true } )
    }

    handleToggleInfo(){
        this.setState( { toggleInfo: !this.state.toggleInfo } )
    }

    render(){
        let authors,
            thumbnail
            
        // Handling author name
        if(this.props.bookInfo.volumeInfo.authors === 'no author' || this.props.bookInfo.volumeInfo.authors === undefined){
            authors = 'No Author'
        } else {
            authors = this.props.bookInfo.volumeInfo.authors.join(", ")
        }

        // // Handling thumbnail image
        if(this.props.bookInfo.volumeInfo.imageLinks === 'no cover' || this.props.bookInfo.volumeInfo.imageLinks === undefined){
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
                        <br/>

                        {(!this.state.toggleInfo) && (
                        <span onClick = {this.handleToggleInfo.bind(this)} className = 'toggle-info'>More...</span>
                        )}

{/*Toggle Info*/}       {this.state.toggleInfo === true && (
                        <div>
                            <MoreInfo 
                            Info ={this.props.bookInfo} 
                            />

                        <span onClick = {this.handleToggleInfo.bind(this)} className = 'toggle-info'>Less...</span>
                        </div>
                        )}

                        <br/>
{/*Delete book*/}       {this.props.canDelete === true && (
                            <button onClick = {this._handleDeleteFromHaveRead.bind(this)}>Delete</button>
                        )}
{/*add book to list*/}  {this.props.canAddToHaveRead === true && (
                            <button onClick = {this._handleAddToHaveRead.bind(this)}>Add</button> //in future, two options, haveRead e WannaRead
                        )}

{/*Add confirm*/}       {this.state.isAdded === true && this.props.canAddToHaveRead === true && (
                            <span ><img src = {done} alt = 'added' className = 'done'></img></span>
                        )}

                    </div>
                </div>
            </div>
        )
    }
}