// Import packages
import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'


// Env
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Icons
import IBW from '../src/assets/icons/IBW.png'

const Sidebar = () => {
    // Variable
    const navigate = useNavigate()
    const [userOnline, setUserOnline] = useState(null)

    const logoutHandler = async (e) => {
        e.preventDefault()

        try {
            let res = await axios.post(`${BASE_URL}/api/auth/logout`, {}, { withCredentials: true })

            if (res.data.success === true) {
                navigate("/auth");
                await authChecker();
            }
            else {
                alert(res.data.message)
                navigate("/auth");
                await authChecker();
            }
        }
        catch (err) {
            console.error("Logout error:", err);
            alert("Something went wrong during logout.");
            await authChecker();
        }
    }

    const authChecker = async () => {
        try {
            let res = await axios.get(`${BASE_URL}/api/auth/check`, { withCredentials: true })

            if (res.data.userOnline === false) {
                setUserOnline(false)
            }
            else {
                setUserOnline(true)
            }
        }
        catch (err) {
            console.log(err.message)
        }
    }

    useEffect(() => {
        authChecker()
    }, [])

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
                    {userOnline === null ? null : (
                        userOnline ? (
                            <button
                                type="submit"
                                className="sideTiles bg-[var(--blue)] text-white font-[500]"
                                onClick={logoutHandler}
                            >
                                Log Out
                            </button>
                        ) : (
                            <NavLink
                                to="/auth"
                                className="sideTiles bg-[var(--blue)] text-white font-[500]"
                            >
                                Log in
                            </NavLink>
                        )
                    )}

                </li>
            </ul>
        </nav>
    )
}

export default Sidebar
