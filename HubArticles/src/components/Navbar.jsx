import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <Link to="/">home</Link> 
        <Link to="contatos">contatos</Link> 
    </nav>
  )
}

export default Navbar
