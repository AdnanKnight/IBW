import React from 'react'
import { Outlet } from 'react-router-dom'

import Sidebar from '../../components/Sidebar/Sidebar'

import './MainLayout.css'

const MainLayout = () => {
    return (
        <div className='main-container'>
            <Sidebar />
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default MainLayout