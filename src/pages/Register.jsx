import React from 'react'
import { useForm } from 'react-hook-form'
import useAuthentication from '../hooks/useAuthentication'
import defaultRegisterValue from '../utils/defaultRegisteValues'
import "./styles/register.css"

const Register = () => {
  
  const {register , handleSubmit, reset} = useForm()
  
  const {createANewUser} = useAuthentication()

  const submit = data => {
    createANewUser(data)
    reset(defaultRegisterValue)
  }
  return (
  <div className='containe-register'>
    <form onSubmit={handleSubmit(submit)} className='form-container'>
      <div className='container-register'>
        <h2 className='title'>Sign Up</h2>
        <div className='register-input'>           
          <label className='label-register'   htmlFor="firstName">Frist Name<span   className='span-register'> *</span></label>
          <input  {...register("firstName")}    type="text" id="firstName"/>
        </div>  
        <div className='register-input'>
          <label className='label-register'   htmlFor="lastName">Last Name<span   className='span-register'> *</span></label>
          <input  {...register("lastName")} type="text"   id="lastName"/>
        </div> 
        <div className='register-input'>
          <label className='label-register'   htmlFor="email">Email<span   className='span-register'> *</span></label>
          <input  {...register("email")} type="email"   id="email"/>
        </div>  
        <div className='register-input'>
          <label className='label-register'   htmlFor="password">Password<span   className='span-register'> *</span></label>
          <input  {...register("password")}   type="password" id="password"/>
        </div> 
        <div className='register-input'>
          <label className='label-register'    htmlFor="phone">Phone<span   className='span-register'> *</span></label>
          <input  {...register("phone")} type="phone"   id="phone"/>
        </div> 
        <button className='btn-register'>Register</button>  
      </div>
    </form>
  </div>
  )
}

export default Register