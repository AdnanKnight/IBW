import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './ProductHeader.css';

const ProductHeader = ({ searchBarText, setSearchBarText }) => {
    const location = useLocation();

    return (
        <>
            <h1>Products</h1>
            <div className="product-actions">
                <NavLink className={({ isActive }) => isActive ? 'tiles active' : 'tiles'} to='/products' end>All</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'tiles active' : 'tiles'} to='/products/create'>Create</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'tiles active' : 'tiles'} to='/products/update'>Update</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'tiles active' : 'tiles'} to='/products/delete'>Delete</NavLink>
            </div>

            {/* ✅ Conditionally render search bar */}
            {location.pathname !== '/products/create' && (
                <div className='product-search-bar'>
                    <i className="ri-search-line"></i>
                    <input
                        type="text"
                        placeholder="Search Product"
                        value={searchBarText}
                        onChange={(e) => setSearchBarText(e.target.value)}
                    />
                </div>
            )}
        </>
    );
};

export default ProductHeader;
