import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../../Images/Logo.png'
import fire from '../../config/fire'
import logout from '../../Images/logout.svg'

class Header extends React.Component{
    constructor(){
        super()
        this.state = {
            isInside: false
        }
    this.handleActive = this.handleActive.bind(this)
    }

    handleActive(e){
        e.preventDefault() 
        this.setState( { isInside: true } )
    }

    logout(){
        fire.auth().signOut()
    }

    render(){
        const inAddBooks = this.props.inAddBooks
        const inHaveRead = this.props.inHaveRead
        const inAbout = this.props.inAbout
        return (
            <div className = "header-container">

                <div> <img className = 'logo-img' src = {Logo} alt = 'no logo'></img></div>

                <div className = {`home ${inAddBooks ? 'inside' : ''}`} >
                    <Link className = 'header-link' to='/'>Home</Link>
                </div>
                
                <div className = {`header-haveRead ${inHaveRead ? 'inside' : ''}`}>
                    <Link className = 'header-link' to = "/haveRead">My Books</Link>
                </div>

                <div className = {`about ${inAbout ? 'inside' : ''}`}>
                    <Link className = 'header-link' to = "/about">About</Link>
                </div>
                
                <div className = 'logout-bt'>
                    <button onClick = {this.logout.bind(this)}><img className = 'logout-img'src = {logout} alt = 'logout'/></button>
                </div>

            </div>
        )
    }
}
export default Header