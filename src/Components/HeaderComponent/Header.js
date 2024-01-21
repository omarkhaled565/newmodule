import React from 'react'
import logo from "../Assets/logo.jpeg"
import "./Header.css"
const Header = () => {
  return (
    <div className='container'>
        <div className='header'>
            <div className=' logo'>
                <img   className ="imgHeader"src={logo} alt='known'></img>
                <h4 className='text'> EgyptNews</h4>
            </div> 
            <div className=' links'>
                <a href='/' className='btn1'> Home</a>
                <a href='/CreatePost' className='btn'> CreatePosts</a>
            </div>
        </div>
    </div>
  )
}

export default Header