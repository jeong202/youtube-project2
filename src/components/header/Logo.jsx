import React from 'react'
import { Link } from 'react-router-dom'
import { SiApplemusic } from 'react-icons/si'

const Logo = () => {
    return (
        <h1 className='header__logo'>
            <Link to='/'>
                <em><SiApplemusic /></em>
                <span>guitar<br />youtube</span>
            </Link>
        </h1>
    )
}

export default Logo