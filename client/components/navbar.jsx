import React from 'react'
import { NavLink } from 'react-router-dom';

const navbar = () => {
  return (
    <nav className='navBar'>
      <ul className="navBarSection">
        <li><i className="ri-menu-search-line text-xl miniUITile"></i></li>
        <li className="navSection">
          <NavLink to="/" className={({ isActive }) => isActive ? 'w-[50%] h-full flex justify-center items-center text-center rounded-[20px] bg-[var(--accent-light)]' : 'w-[50%] h-full flex justify-center items-center text-center'}>Shop</NavLink>
          <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'w-[50%] h-full flex justify-center items-center text-center rounded-[20px] bg-[var(--accent-light)]' : 'w-[50%] h-full flex justify-center items-center text-center'}>Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard#user-details" >
            <i className="ri-account-pin-circle-line text-xl miniUITile"></i>
          </NavLink>
        </li>
      </ul>
      <ul className="navBarSection">
        <li className='text-2xl font-bold'>Explore</li>
        <li>Filter</li>
        <li><i className="ri-search-2-line text-xl miniUITile"></i></li>
      </ul>
    </nav >
  )
}

export default navbar