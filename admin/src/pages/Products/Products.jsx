import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Products.css'
import { Link } from 'react-router-dom'

const API_BASE = import.meta.env.VITE_API_BASE_URL

const Products = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)

    const fetchProducts = async () => {
        try {
            let res = await axios.get(`${API_BASE}/api/products/read`)
            setProducts(res.data)
            await console.log(products)
        } catch (err) {
            alert(err.message)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])


    return (
        <section className='products'>
            <h1>Products</h1>
            <div className="product-actions">
                <Link className='tiles' path='/'>All</Link>
                <Link className='tiles' path='/'>Create</Link>
                <Link className='tiles' path='/'>Update</Link>
                <Link className='tiles' path='/'>Delete</Link>
            </div>
            <div className='product-search-bar'>
                <i className="ri-search-line"></i>
                <input type="text" placeholder='Search Product' />
            </div>
        </section>
    )
}

export default Products