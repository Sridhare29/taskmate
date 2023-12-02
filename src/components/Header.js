import React from 'react'
import Logo from "../assets/logo.png"

function Header() {
  return (
    <div className='main'>
      <img className='logo' src={Logo}></img>
      <h4>Software Engineer</h4>
    </div>
  )
}

export default Header