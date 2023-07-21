import React from 'react'
import useAuthentication from '../hooks/useAuthentication'
import "./styles/logIn.css"
import { Link } from 'react-router-dom';

const LogIn = () => {

  const {LoginUser} = useAuthentication()
   
  const handleLogIN = e => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    const data = {email, password}
    
    LoginUser(data)
  }
  return (
    <div className='container-login'>
      <form onSubmit={handleLogIN}   className='login-form'>
        <h2 className='title-login'>Welcome! Enter your   mail and password to continue</h2>
        <div className='inputs'>
          <label className='label-login'   htmlFor="email">Email</label>
          <input className='input-login' type="email"   id='email' />
        </div>
        <div className='inputs'>
          <label className='label-login'   htmlFor="password">Password</label>
          <input className='input-login' type="password"   id='password'/>
        </div>
        <button className='button-login'>Login</button>
        <div className='ruta-register'>
          <p>Don’t have an account?</p>
          <button className='singin-button'>
            <Link to="/register">Sign up</Link>
          </button>
        </div>
      </form>
    </div>
  )
}

export default LogIn