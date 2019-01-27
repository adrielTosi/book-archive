import React from "react"
import '../style.css'
import NOCOVER from '../../../NOCOVER.jpg'

//This component deals with adding to the list of HaveRead books

export default class MoreInfo extends React.Component {
    
    handleBack(){
        this.props.history.goBack()
    }

    __handleAddHaveRead(){
        this.props.handleAddHaveRead(this.props.location.state.Info)
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

                    {this.props.location.state.canAddToHaveRead === true  && //change to canAddToHaveRead (opposite logic)
                    //appears only when coming from addBooks and in the future from WannaRead
                        (<button onClick = {this.__handleAddHaveRead.bind(this)}> I have Read this book</button>)}

                    <button className = 'link-button' onClick = {this.handleBack.bind(this)}> Back </button>
                </div>
            </div>
        )
    }
}