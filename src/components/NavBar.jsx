import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {


  return (
    <nav className="navbar navbar-expand-lg bg-light bg-dark navbar-dark">
    <div className="container">
      <a className="navbar-brand" to="/">
      <img 
      src="https://cdn.pixabay.com/photo/2016/07/21/00/38/pokemon-1531648_1280.png" alt="pokegps" />
      </a>
      
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          
          <li className="nav-item">
            <NavLink className="nav-link" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="pokemones">Pokedex</NavLink>
          </li>
          
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default NavBar