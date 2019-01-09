import React from 'react'
import {Switch, Route} from 'react-router-dom'
import addBooks from './addBooks.js'
import About from '../Header/About.js'
import Contact from '../Header/Contact.js'


function Main () {
    return (
        <Switch>
            <Route exact path = '/' component = {addBooks}/>
            <Route path = '/about' component = {About}/>
            <Route path = '/contact' component = {Contact}/>
        </Switch>
    )
}

export default Main