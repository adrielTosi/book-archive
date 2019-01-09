import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <div className = "header-container">
            <div>
                <Link to = "/about">About</Link>
            </div>
            <div>
                <Link to = "/contact">Contact</Link>
            </div>

        </div>
    )
}

export default Header