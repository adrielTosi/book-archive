import React from 'react'
import wantRead from './haveRead'
import haveRead from './haveRead'

export default class MyBooks extends React.Component {
    constructor(props){
        super(props)

        this.state = { }
    }

    render() {
        return(

            <div className = "myBooks-container">

                <div className = "myBooks-header">
                    <button className = "toggle">Books I've read</button>
                    <button className = "toggle">Books I wanna read</button>
                    <button className = "add-book">+Add</button>
                </div>

                
            </div>

        )
    }

}