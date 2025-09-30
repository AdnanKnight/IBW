import React from 'react'
import './SideBar.css'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className='sidebar-container'>
            <div className='top'>
                <span>
                    <h1>IBW-Admin</h1>
                    <i className="ri-menu-fill"></i>
                </span>
                <Link className='tiles' to="/orders"><i className="ri-flag-fill"></i>Orders</Link>
                <Link className='tiles' to="/products"><i className="ri-box-2-fill"></i>Products</Link>
                <Link className='tiles' to="/ads"><i className="ri-gallery-upload-fill"></i>Ads</Link>
                <Link className='tiles' to="/operations"><i className="ri-service-fill"></i>Operations</Link>
            </div>

            <div className='bottom'>
                <Link className='tiles' to='/'>Your Profile <i className="ri-arrow-right-up-fill"></i></Link>
                <Link className='tiles' to='/'>LogOut <i className="ri-login-box-fill"></i></Link>
            </div>
        </div>
    )
}

export default Sidebar