import React from "react"
import '../style.css'
import NOCOVER from '../../../NOCOVER.jpg'

//This component deals with adding to the list of HaveRead books

export default class MoreInfo extends React.Component {
    
    handleBack(){
        this.props.history.goBack()
    }

    handleHaveRead(){
        let newStorage, author, thumbnail
        let currentStorage = []

        if(localStorage.getItem('haveRead') !== null){ //check if haveRead exists
            currentStorage = JSON.parse(localStorage.getItem('haveRead'))
        }

        if(this.props.location.state.Info.volumeInfo.authors === undefined){ // check if authors exists
            author = 'No Author'
        } else {
            author = this.props.location.state.Info.volumeInfo.authors
        }

        if(this.props.location.state.Info.volumeInfo.imageLinks === undefined){ //check if thumbnail exists
            thumbnail = 'NO BOOK COVER'
        } else {
            thumbnail = this.props.location.state.Info.volumeInfo.imageLinks.thumbnail
        }

        let exists = currentStorage.some( ele => ele.id === this.props.location.state.Info.id)

        if(!exists){
        newStorage = [...currentStorage,{
            id: this.props.location.state.Info.id,
            volumeInfo: {
                authors: author, //if no author insert 'no author'
                imageLinks: {thumbnail: thumbnail} , // if no imageLinks insert NOCOVER -- NOT WORKING
                title: this.props.location.state.Info.volumeInfo.title,
                pageCount: this.props.location.state.Info.volumeInfo.pageCount,
                description: this.props.location.state.Info.volumeInfo.description,
                language:this.props.location.state.Info.volumeInfo.language , 
                publisher: this.props.location.state.Info.volumeInfo.publisher, 
                publishedDate: this.props.location.state.Info.volumeInfo.publishedDate, 
                categories:this.props.location.state.Info.volumeInfo.categories

            }
        }]

        localStorage.setItem('haveRead', JSON.stringify(newStorage))
        }
    }
    render (){
        let thumbnail, author
        //handling no cover
        if(this.props.location.state.Info.volumeInfo.imageLinks === undefined){
            thumbnail = <img src = {NOCOVER} alt = 'No book cover'></img>
        } else {
            thumbnail = <img src = {this.props.location.state.Info.volumeInfo.imageLinks.thumbnail} alt = 'No book cover'></img>
        }

        //handling no author
        if(this.props.location.state.Info.volumeInfo.authors === undefined){ //
            author = 'No Author'
        } else {
            author = this.props.location.state.Info.volumeInfo.authors.join(', ')
        }
        
        return (
            <div className = 'moreInfo'>
                <div>
                    {thumbnail}
                </div>
                
                <div className = 'volume-info'>                
                    <h4>{this.props.location.state.Info.volumeInfo.title}</h4>
                    <span className = 'volume-author'>
                    Author: {author} 
                    </span>
                    
                    <span className  = 'volume-pages'>
                    Pages: {this.props.location.state.Info.volumeInfo.pageCount}
                    </span>
                    <br/>
                    <p>
                        Description: {this.props.location.state.Info.volumeInfo.description}
                    </p>
                    <br/>

                    {this.props.location.state.haveRead === false  && 
                    //appears only when coming from addBooks 
                    //and in the future from WannaRead
                        (<button onClick = {this.handleHaveRead.bind(this)}> I have Read this book</button>)}

                    <button className = 'link-button' onClick = {this.handleBack.bind(this)}> Back </button>
                </div>
            </div>
        )
    }
}