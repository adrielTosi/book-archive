import React from 'react'
import './style.css'
import {Link} from 'react-router-dom'
import NOCOVER from '../../NOCOVER.jpg'

export default class BookCard extends React.Component {
    toggleOpen (){
        this.props.changeIsOpen(this.props.index)
    }

    render(){
        let authors
        let thumbnail
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
            thumbnail = <img src = {this.props.bookInfo.volumeInfo.imageLinks.smallThumbnail} alt = 'No book cover'></img>
        }
        return(
            <div className = 'individual-book-container' key = {this.props.bookInfo.volumeInfo.id}>

            {!this.props.state && (
                <div className = 'book-title'>
                    <div 
                    key = {this.props.bookInfo.volumeInfo.id}
                    className = "inner-book-name" >

                        {this.props.bookInfo.volumeInfo.title}

                    </div>

                    <button
                    className = 'expand-button'
                    onClick = {this.toggleOpen.bind(this)}>
                        Expand
                    </button>
                </div>
            )}

            {this.props.state && (
                <div 
                key = {this.props.bookInfo.volumeInfo.id} 
                className = "book-card" >

                    <div>
                        {thumbnail}
                    </div>
                    <div>
                        <h4> {this.props.bookInfo.volumeInfo.title} </h4>
                        <h6> {authors} </h6>

                        <Link to = {{
                            pathname: '/info',
                            state: {
                                Info: this.props.bookInfo
                            }
                        }}>More...</Link>
                        <br/>
                        <br/>
                        <button
                            className = 'expand-button'
                            onClick = {this.toggleOpen.bind(this)}>
                                Contract
                        </button>

                    </div>
                </div>
            )}
            </div>
        )
    }
}