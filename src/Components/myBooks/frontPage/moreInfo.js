import React from "react"
import '../style.css'
import NOCOVER from '../../../NOCOVER.jpg'

//This component deals with adding to the list of HaveRead books

export default class MoreInfo extends React.Component {
    
    render (){
        let thumbnail, author
        //handling no cover
        if(this.props.Info.volumeInfo.imageLinks === undefined){ //change to 'no book cover'
            thumbnail = <img src = {NOCOVER} alt = 'No book cover'></img>
        } else {
            thumbnail = <img src = {this.props.Info.volumeInfo.imageLinks.thumbnail} alt = 'No book cover'></img>
        }

        //handling no author
        if(this.props.Info.volumeInfo.authors === undefined){ //
            author = 'No Author'
        } else {
            author = this.props.Info.volumeInfo.authors.join(', ')
        }
        
        return (
            <div className = 'moreInfo'>
                               
                <div className = 'volume-info'>                
                    <br/>
                    <p>
                        Description: {this.props.Info.volumeInfo.description}
                    </p>
                    <br/>

                </div>
            </div>
        )
    }
}