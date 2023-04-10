import React from 'react'

const Header = ({ setSearch }) => {
  return (
    <header>    
        <div className="filter-container">
    <div className="input-container">
    <input
        name="búsqueda"
        type="text"
        placeholder="Search by name, number or type"
        onChange={(e) =>
            setSearch(e.target.value.toLowerCase())
            }
    ></input>
     <i className="fa-solid fa-magnifying-glass"></i>
       </div>
       </div>

    </header>

  )
}

export default Header