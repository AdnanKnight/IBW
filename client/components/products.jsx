import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

import DefaultPlaceholder from '../src/assets/defaults/default-placeholder.webp';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const API_BASE = 'http://localhost:5555/api'; // Adjust if needed

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await axios.get(`${API_BASE}/products`);
                setProducts(res.data);
            } catch (err) {
                console.error('Failed to fetch products:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className='productList mt-[30px] flex flex-wrap gap-6 justify-center'>
            {loading ? (
                <p className="text-gray-500 text-center">Loading products...</p>
            ) : products.length > 0 ? (
                products.map((product) => (
                    <NavLink
                        key={product._id}
                        to={`/viewproduct/${product._id}#productProfile`}
                        className='productCard w-[250px] h-[350px] bg-gray-200 rounded-xl flex flex-col justify-between items-center py-5 hover:shadow-lg transition'
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                        <div className='productCardImg w-[80%] h-[50%]'>
                            <img
                                src={product.image || DefaultPlaceholder}
                                alt={product.name}
                                className='w-full h-full object-cover bg-gray-300 rounded-md'
                            />
                        </div>
                        <div className='productCardInfo w-[80%] h-[30%] text-center'>
                            <h3 className="font-semibold">{product.name}</h3>
                            <h3 className="text-sm text-gray-600">{product.author || 'Unknown Author'}</h3>
                            <h3 className="text-blue-600 font-bold">₹{product.price}</h3>
                        </div>
                        <button className='w-[80%] py-2 px-4 bg-gray-400 rounded-lg hover:bg-gray-500 transition'>
                            Add to Cart
                        </button>
                    </NavLink>
                ))
            ) : (
                <p className="text-gray-500 text-center">No products available.</p>
            )}
        </div>
    );
};

export default Products;
