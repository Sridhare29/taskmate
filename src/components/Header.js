import React from 'react'
import Logo from "../assets/logo.png"

function Header() {
  return (
    <div className='main'>
      <img className='logo' src={Logo}></img>
      <a href='/' className='navtitle'>Software Engineer</a>
    </div>
  )
}

export default Header