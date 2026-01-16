import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <nav style={{display: "flex", justifyItems:"space-between", alignItems:"center", gap:"30px"}}>
      <Link to="/">Home</Link>
      <Link to= '/about'>About us</Link>
      <Link to= "/services">Our services</Link>
      <Link to ="/contact">Contact us</Link>
    </nav>
  )
}

export default Navbar
