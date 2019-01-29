import React from 'react'
import {Switch, Route} from 'react-router-dom'
import addBooks from './frontPage/addBooks.js'
import About from '../Header/About.js'
import Contact from '../Header/Contact.js'
import MoreInfo from './frontPage/moreInfo'
import HaveRead from './HaveRead/haveRead'
import Signup from '../Authentication/Signup'
import App from '../../App'


function Main () {
    return (
        <Switch>
            <Route exact path = '/' component = {addBooks}/>
            <Route path = '/about' component = {About}/>
            <Route path = '/contact' component = {Contact}/>
            <Route path = '/info' component = {MoreInfo}/>
            <Route path = '/haveRead' component = {HaveRead}/>
        </Switch>
    )
}

export default Main