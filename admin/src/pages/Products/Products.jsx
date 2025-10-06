import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Products.css'
import Item from '../../components/Item/Item'
import ProductHeader from '../../components/ProductHeader/ProductHeader'

const API_BASE = import.meta.env.VITE_API_BASE_URL

const Products = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [searchBarText, setSearchBarText] = useState('')

    const fetchProducts = async () => {
        try {
            let res = await axios.get(`${API_BASE}/api/products/read`)
            setProducts(res.data)
        } catch (err) {
            console.error("Fetch error:", err);
            alert(err.message);
        }
        finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchProducts()
    }, [])

    const handleDelete = async (id) => {
        if (!window.confirm("Delete this product?")) return;
        try {
            await axios.delete(`${API_BASE}/api/products/delete/${id}`);
            setProducts(prev => prev.filter(p => p._id !== id));
        } catch (err) {
            console.error("Delete error:", err);
            alert("Failed to delete product");
        }
    };


    return (
        <section className='products'>

            <ProductHeader searchBarText={searchBarText} setSearchBarText={setSearchBarText} />

            <div className='product-display'>
                {loading ? (
                    <p>Loading products...</p>
                ) : (
                    products
                        .filter(product =>
                            product.name.toLowerCase().includes(searchBarText.toLowerCase())
                        )
                        .map((product, index) => (
                            <React.Fragment key={product._id || index}>
                                <Item product={product} index={index} onDelete={handleDelete} />
                                <hr />
                            </React.Fragment>
                        ))
                )}

                {!loading && products.filter(product =>
                    product.name.toLowerCase().includes(searchBarText.toLowerCase())
                ).length === 0 && (
                        <p>No products match your search.</p>
                    )}

            </div>
        </section>
    )
}

export default Products