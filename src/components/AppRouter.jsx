import React from 'react'
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Pokedex from '../pages/Pokedex';
import Details from '../pages/Details'

const AppRouter = () => {
  return (
    <div>
        <>
        <Routes>
            <Route path="/" element={<HomePage /> } />
            <Route path='pokemones' element={<Pokedex /> } />
            <Route path='/:id' element={<Details /> } />


        </Routes>
        </>
        
    </div>
  )
}

export default AppRouter