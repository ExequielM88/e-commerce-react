import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./header.css"

const Header = () => {
  
 
  
  
  return (
    <header className='container-header'>
      <h1 ><Link to="/" className='link-home'>E-commerce</Link></h1>
      <nav >
        <ul className='ul-header'>
          <li><Link to="/login"><i className='bx bx-user'></i></Link></li>
          <li><Link to="/purchases"><i className='bx bx-box' ></i></Link></li>
          <li><Link to="/cart"><i className='bx bx-cart'  ></i></Link></li>
          <li><Link to="/register" className='register'>Register</Link></li>
        </ul>
      </nav>
      
    </header>
  )
}

export default Header