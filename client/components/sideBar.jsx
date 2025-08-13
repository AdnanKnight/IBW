// Import packages
import React from 'react'
import { NavLink } from 'react-router-dom'

// Icons
import IBW from '../src/assets/icons/IBW.png'

const Sidebar = () => {
    return (
        <nav className='sideBar'>
            <NavLink to="/home">
                <img src={IBW} Linkt="IBW Logo" className='IBWImg' />
            </NavLink>

            {/* First group of links */}
            <ul className='flex flex-col gap-4 w-full h-fit'>

                <li className="flex justify-center">
                    <NavLink to="/books" className={({ isActive }) => isActive ? 'text-blue-600 tile' : 'tile'}>
                        Books
                    </NavLink>
                </li>
                <li className="flex justify-center">
                    <NavLink to="/boxes" className={({ isActive }) => isActive ? 'text-blue-600 tile' : 'tile'}>
                        Boxes
                    </NavLink>
                </li>
                <li className="flex justify-center">
                    <NavLink to="/others" className={({ isActive }) => isActive ? 'text-blue-600 tile' : 'tile'}>
                        Others
                    </NavLink>
                </li>
            </ul>

            {/* Second group of links */}
            <ul className='flex flex-col gap-4 w-full h-fit'>
                <li className="flex justify-center">
                    <NavLink to="/orders" className={({ isActive }) => isActive ? 'text-blue-600 tile' : 'tile'}>
                        Orders
                    </NavLink>
                </li>
                <li className="flex justify-center">
                    <NavLink to="/logout" className={({ isActive }) => isActive ? 'text-blue-600 tile' : 'tile'}>
                        Log Out
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Sidebar
