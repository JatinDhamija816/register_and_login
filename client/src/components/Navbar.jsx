import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='navbar' >
            <div className='left'>
                <Link style={{ textDecoration: 'none' }} to="/">Main</Link>
            </div>
            <ul className='right'>
                <li><Link style={{ textDecoration: 'none' }} to='/login'>Login</Link></li>
                <li><Link style={{ textDecoration: 'none' }} to="/register">Register</Link></li>
            </ul>
        </div>

    )
}

export default Navbar
