import React from 'react'
import './style.css'


export default class BookCard extends React.Component {
    toggleOpen (){
        this.props.changeIsOpen(this.props.index)
    }

    render(){
        let authors
        if(this.props.bookInfo.volumeInfo.authors === undefined){
            authors = 'No Author'
        } else {
            authors = this.props.bookInfo.volumeInfo.authors.join(", ")
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
                        <img src = {this.props.bookInfo.volumeInfo.imageLinks.smallThumbnail} alt = 'No book cover'></img>
                    </div>
                    <div>
                        <h4> {this.props.bookInfo.volumeInfo.title} </h4>
                        <h6> {authors} </h6>
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