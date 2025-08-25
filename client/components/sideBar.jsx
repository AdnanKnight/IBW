// Import packages
import { NavLink  } from 'react-router-dom'

// Icons
import IBW from '../src/assets/icons/IBW.png'

const Sidebar = () => {
    return (
        <nav className='sideBar'>
            <NavLink to="/">
                <img src={IBW} alt="IBW Logo" className='IBWImg' />
            </NavLink>

            {/* First group of links */}
            <ul className='flex flex-col gap-1 w-full h-fit'>
                <h3 className='font-bold text-xl text-[var(--accent-dark)] mx-4'>Pages</h3>
                <li className="flex justify-center">
                    <NavLink to="/about" className={({ isActive }) => isActive ? 'activeSideTile sideTiles' : 'sideTiles'}>
                        About
                    </NavLink>
                </li>
                <li className="flex justify-center">
                    <NavLink to="/contact" className={({ isActive }) => isActive ? 'activeSideTile sideTiles' : 'sideTiles'}>
                        Contact
                    </NavLink>
                </li>
            </ul>
            <ul className='flex flex-col gap-1 w-full h-fit'>
                <h3 className='font-bold text-xl text-[var(--accent-dark)] mx-4'>Categories</h3>
                <li className="flex justify-center">
                    <NavLink to="/" className={({ isActive }) => isActive ? 'activeSideTile sideTiles' : 'sideTiles'}>
                        All
                    </NavLink>
                </li>
                <li className="flex justify-center">
                    <NavLink to="/books" className={({ isActive }) => isActive ? 'activeSideTile sideTiles' : 'sideTiles'}>
                        Books
                    </NavLink>
                </li>
                <li className="flex justify-center">
                    <NavLink to="/boxes" className={({ isActive }) => isActive ? 'activeSideTile sideTiles' : 'sideTiles'}>
                        Boxes
                    </NavLink>
                </li>
                <li className="flex justify-center">
                    <NavLink to="/others" className={({ isActive }) => isActive ? 'activeSideTile sideTiles' : 'sideTiles'}>
                        Others
                    </NavLink>
                </li>
            </ul>

            {/* Second group of links */}
            <ul className='flex flex-col gap-4 w-full h-fit'>
                <li className="flex justify-center">
                    <NavLink to="/dashboard#previous-orders" className={({ isActive }) => isActive ? 'activeSideTile sideTiles' : 'sideTiles'}>
                        Orders
                    </NavLink>
                </li>
                <li className="flex justify-center">
                    <NavLink to="/logout" className="sideTiles bg-[var(--blue)] text-white font-[500]">
                        Log Out
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Sidebar
