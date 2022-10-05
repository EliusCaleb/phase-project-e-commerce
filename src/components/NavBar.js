import React from 'react'
import { NavLink } from 'react-router-dom'


const NavBar = () => {
  return (
    <div className='navbar'>
        <nav>
            <ul>
                <li><NavLink end to='/'>Home</NavLink></li>
                <li><NavLink to='/about'>About</NavLink></li>
                <li><NavLink to='/productlist'>ProductList</NavLink></li>
                <li><NavLink to='/signup'>SignUp</NavLink></li>
            </ul>
        </nav>

    </div>
  )
}

export default NavBar