import React from 'react'
import { NavLink } from 'react-router-dom';

const adminNavbar = () => {
    return (
        <nav className='navBar'>
            <ul className="navBarSection">
                <li><NavLink to='' className="text-xl font-bold">IBW-Admin🎖️</NavLink></li>
                <li className="navSection">
                    <NavLink to="/admin/products" className={({ isActive }) => isActive ? 'w-[50%] h-full flex justify-center items-center text-center rounded-[20px] bg-[var(--accent-light)]' : 'w-[50%] h-full flex justify-center items-center text-center'}>Product</NavLink>
                    <NavLink to="/admin/ads" className={({ isActive }) => isActive ? 'w-[50%] h-full flex justify-center items-center text-center rounded-[20px] bg-[var(--accent-light)]' : 'w-[50%] h-full flex justify-center items-center text-center'}>Ad</NavLink>
                    <NavLink to="/admin/users" className={({ isActive }) => isActive ? 'w-[50%] h-full flex justify-center items-center text-center rounded-[20px] bg-[var(--accent-light)]' : 'w-[50%] h-full flex justify-center items-center text-center'}>User</NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard#user-details" >
                        <i className="ri-account-pin-circle-line text-xl miniUITile w-[30px]"></i>
                    </NavLink>
                </li>
            </ul> 
            <ul className="navBarSection">
                <li className='font-bold'></li>
                <li>Filter</li>
                <li><i className="ri-search-2-line text-xl miniUITile"></i></li>
            </ul>
        </nav >
    )
}

export default adminNavbar