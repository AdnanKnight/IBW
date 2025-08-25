import React from 'react';
import { NavLink } from 'react-router-dom';
import { Bars3Icon, MagnifyingGlassIcon, UserCircleIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  return (
    <nav className='navBar grid grid-cols-[1fr_1fr] items-center gap-4'>
      <ul className="navBarSection grid grid-cols-[auto_1fr_auto] items-center gap-2">
        {/* Menu Icon */}
        <li>
          <Bars3Icon className="w-6 h-6 text-gray-700 cursor-pointer" />
        </li>

        {/* Navigation Links */}
        <li className="navSection">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? 'w-[50%] h-full flex justify-center items-center text-center rounded-[20px] bg-blue-300'
                : 'w-[50%] h-full flex justify-center items-center text-center'
            }
          >
            Shop
          </NavLink>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive
                ? 'w-[50%] h-full flex justify-center items-center text-center rounded-[20px] bg-blue-300'
                : 'w-[50%] h-full flex justify-center items-center text-center'
            }
          >
            Dashboard
          </NavLink>
        </li>

        {/* User Icon */}
        <li>
          <NavLink to="/dashboard#user-details">
            <UserCircleIcon className="w-6 h-6 text-gray-700 cursor-pointer" />
          </NavLink>
        </li>
      </ul>

      <ul className="navBarSection grid grid-cols-[auto_auto] items-center gap-2">
        <li className='text-2xl font-bold'>Explore</li>
        <li>
          <MagnifyingGlassIcon className="w-6 h-6 text-gray-700 cursor-pointer" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
