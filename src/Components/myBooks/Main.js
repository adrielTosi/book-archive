import React from 'react'
import {Switch, Route} from 'react-router-dom'
import AddBooks from './frontPage/addBooks.js'
import About from '../Header/About.js'
import Contact from '../Header/Contact.js'
import HaveRead from './HaveRead/haveRead'
import Header from '../Header/Header'


class Main extends React.Component {
    constructor(){
        super()
        this.state = {
            inAddBooks: false,
            inHaveRead: false,
            inAbout: false
        }

    this.toggleInside = this.toggleInside.bind(this)
    }

    toggleInside(inComp){ //Components must pass a string e.g: "inAddBooks" to this function, to call it properly
        this.setState( { [inComp]: !this.state[inComp] } )
    }
    render(){
        return (
            <div className = "main">
            <div className = 'main-background'></div>

                <Header 
                inAddBooks = {this.state.inAddBooks}
                inHaveRead = {this.state.inHaveRead}
                inAbout = {this.state.inAbout}
                />

                <Switch>
                    <Route exact path = '/' render = {(props) => (
                        <AddBooks {...props} 
                        toggleInside = {this.toggleInside}
                    />)}/>

                    <Route path = '/about' render = { (props) => (
                        <About {...props}
                        toggleInside = {this.toggleInside}
                    />)}/>

                    <Route path = '/haveRead' render = { (props) => (
                        <HaveRead {...props}
                        toggleInside = {this.toggleInside}
                    />) }/>
                </Switch>
            </div>
        )
    }
}

export default Main