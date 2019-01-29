import React from "react"
import './style.css'

export default class MoreInfo extends React.Component {

    render (){
        return (
            <div className = 'moreInfo'>
                <div>
                    <img src = {this.props.location.state.Info.volumeInfo.imageLinks.thumbnail} alt = 'No book cover'></img>
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