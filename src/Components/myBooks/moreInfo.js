import React from "react"
import './style.css'
import NOCOVER from '../../NOCOVER.jpg'

export default class MoreInfo extends React.Component {

    render (){
        let thumbnail
        if(this.props.location.state.Info.volumeInfo.imageLinks === undefined){
            thumbnail = <img src = {NOCOVER} alt = 'No book cover'></img>
        } else {
            thumbnail = <img src = {this.props.location.state.Info.volumeInfo.imageLinks.thumbnail} alt = 'No book cover'></img>
        }
        return (
            <div className = 'moreInfo'>
                <div>
                    {thumbnail}
                </div>
                
                <div className = 'volume-info'>                
                    <h4>{this.props.location.state.Info.volumeInfo.title}</h4>
                    <span className = 'volume-author'>
                    Author: {this.props.location.state.Info.volumeInfo.authors.join(', ')}
                    </span>
                    
                    <span className  = 'volume-pages'>
                    Pages: {this.props.location.state.Info.volumeInfo.pageCount}
                    </span>
                    <br/>
                    <p>
                        Description: {this.props.location.state.Info.volumeInfo.description}
                    </p>
                </div>
            </div>
        )
    }
}