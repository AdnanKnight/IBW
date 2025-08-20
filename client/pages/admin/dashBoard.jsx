import { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const Admin = () => {
    // const [ads, setAds] = useState([]);
    const [sales, setSales] = useState([]);
    // const [products, setProducts] = useState([]);
    // const [productForm, setProductForm] = useState({ name: '', price: '', description: '' });
    // const [adForm, setAdForm] = useState({ title: '', image: '', link: '' });

    // useEffect(() => {
    //     fetchData();
    // }, []);

    const API_BASE = 'http://localhost:5555/api';

    // const fetchData = async () => {
    //     const prodRes = await axios.get(`${API_BASE}/products`);
    //     const adsRes = await axios.get(`${API_BASE}/ads`);
    //     setProducts(prodRes.data);
    //     setAds(adsRes.data);
    // };

    // const handleProductCreate = async () => {
    //     try {
    //         await axios.post(`${API_BASE}/products`, productForm);
    //         setProductForm({ name: '', price: '', description: '' });
    //         await fetchData();
    //         alert("✅ Product added successfully!");
    //     } catch (error) {
    //         console.error("Product creation failed:", error);
    //         alert("❌ Failed to add product.");
    //     }
    // };

    // const handleAdCreate = async () => {
    //     try {
    //         await axios.post(`${API_BASE}/ads`, adForm);
    //         setAdForm({ title: '', image: '', link: '' });
    //         await fetchData();
    //         alert("✅ Ad created successfully!");
    //     } catch (error) {
    //         console.error("Ad creation failed:", error);
    //         alert("❌ Failed to create ad.");
    //     }
    // };

    // const handleDelete = async (type, id) => {
    //     try {
    //         await axios.delete(`${API_BASE}/${type}/${id}`);
    //         await fetchData();
    //         alert("🗑️ Item deleted successfully!");
    //     } catch (error) {
    //         console.error("Delete failed:", error);
    //         alert("❌ Failed to delete item.");
    //     }
    // };


    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Admin Dashboard</h1>

            <section className=' w-full flex justify-around align-center py-10'>
                <NavLink to="products" className='w-[200px] h-[200px] bg-blue-200 flex justify-center items-center rounded-xl'>Products</NavLink>
                <NavLink to="ads" className='w-[200px] h-[200px] bg-blue-200 flex justify-center items-center rounded-xl'>Ads</NavLink>
                <NavLink to="users" className='w-[200px] h-[200px] bg-blue-200 flex justify-center items-center rounded-xl'>Users</NavLink>
                <NavLink to="sales" className='w-[200px] h-[200px] bg-blue-200 flex justify-center items-center rounded-xl'>Sales</NavLink>
            </section>

            <section className=' w-full bg-white flex flex-col justify-around align-center p-6 mb-10 shadow-md rounded-md'>
                <h2 className="text-xl font-semibold mb-4 text-blue-600">🛍️Orders on Queue</h2>
                    {Array.isArray(sales) && sales.length > 0 ? (
                        sales.map(sale => (
                            <li key={sale._id} className="flex justify-between items-center bg-gray-50 p-3 rounded-md shadow-sm">
                                <div>
                                    <strong>{sale.title}</strong>
                                    <p className="text-sm text-gray-500">{sale.link}</p>
                                </div>
                                <button onClick={() => handleDelete('sales', sale._id)} className="text-red-500 hover:underline">Delete</button>
                            </li>
                        ))
                    ) : (
                        <h3 className="text-gray-500">No Sales found</h3>
                    )}
            </section>

            <section className=' w-full bg-white flex flex-col justify-around align-center p-6 mb-10 shadow-md rounded-md'>
                <h2 className="text-xl font-semibold mb-4 text-blue-600">🛍️Orders Packed</h2>
                    {Array.isArray(sales) && sales.length > 0 ? (
                        sales.map(sale => (
                            <li key={sale._id} className="flex justify-between items-center bg-gray-50 p-3 rounded-md shadow-sm">
                                <div>
                                    <strong>{sale.title}</strong>
                                    <p className="text-sm text-gray-500">{sale.link}</p>
                                </div>
                                <button onClick={() => handleDelete('sales', sale._id)} className="text-red-500 hover:underline">Delete</button>
                            </li>
                        ))
                    ) : (
                        <h3 className="text-gray-500">No Sales found</h3>
                    )}
            </section>

            <section className=' w-full bg-white flex flex-col justify-around align-center p-6 mb-10 shadow-md rounded-md'>
                <h2 className="text-xl font-semibold mb-4 text-blue-600">🛍️Orders on Way</h2>
                    {Array.isArray(sales) && sales.length > 0 ? (
                        sales.map(sale => (
                            <li key={sale._id} className="flex justify-between items-center bg-gray-50 p-3 rounded-md shadow-sm">
                                <div>
                                    <strong>{sale.title}</strong>
                                    <p className="text-sm text-gray-500">{sale.link}</p>
                                </div>
                                <button onClick={() => handleDelete('sales', sale._id)} className="text-red-500 hover:underline">Delete</button>
                            </li>
                        ))
                    ) : (
                        <h3 className="text-gray-500">No Sales found</h3>
                    )}
            </section>

            <section className=' w-full bg-white flex flex-col justify-around align-center p-6 mb-10 shadow-md rounded-md'>
                <h2 className="text-xl font-semibold mb-4 text-blue-600">🛍️Orders delivered</h2>
                    {Array.isArray(sales) && sales.length > 0 ? (
                        sales.map(sale => (
                            <li key={sale._id} className="flex justify-between items-center bg-gray-50 p-3 rounded-md shadow-sm">
                                <div>
                                    <strong>{sale.title}</strong>
                                    <p className="text-sm text-gray-500">{sale.link}</p>
                                </div>
                                <button onClick={() => handleDelete('sales', sale._id)} className="text-red-500 hover:underline">Delete</button>
                            </li>
                        ))
                    ) : (
                        <h3 className="text-gray-500">No Sales found</h3>
                    )}
            </section>
{/* 
            Products Section 
            <section className="bg-white shadow-md rounded-lg p-6 mb-10">
                <h2 className="text-xl font-semibold mb-4 text-blue-600">🛍️ Manage Products</h2>
                <form className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <input
                        type="text"
                        placeholder="Name"
                        value={productForm.name}
                        onChange={e => setProductForm({ ...productForm, name: e.target.value })}
                        className="input"
                    />
                    <input
                        type="number"
                        placeholder="Price"
                        value={productForm.price}
                        onChange={e => setProductForm({ ...productForm, price: e.target.value })}
                        className="input"
                    />
                    <input
                        type="text"
                        placeholder="Description"
                        value={productForm.description}
                        onChange={e => setProductForm({ ...productForm, description: e.target.value })}
                        className="input"
                    />
                    <button onClick={handleProductCreate} className="btn col-span-1 md:col-span-3 cursor-pointer">Add Product</button>
                </form>

                <ul className="space-y-3">
                    {Array.isArray(products) && products.length > 0 ? (
                        products.map(p => (
                            <li key={p._id} className="flex justify-between items-center bg-gray-50 p-3 rounded-md shadow-sm">
                                <div>
                                    <strong>{p.name}</strong> – ₹{p.price}
                                    <p className="text-sm text-gray-500">{p.description}</p>
                                </div>
                                <button onClick={() => handleDelete('products', p._id)} className="text-red-500 hover:underline">Delete</button>
                            </li>
                        ))
                    ) : (
                        <h3 className="text-gray-500">The Product list is empty</h3>
                    )}
                </ul>

            </section>

            Ads Section
            <section className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4 text-green-600">📢 Manage Ads</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <input
                        type="text"
                        placeholder="Title"
                        value={adForm.title}
                        onChange={e => setAdForm({ ...adForm, title: e.target.value })}
                        className="input"
                    />
                    <input
                        type="text"
                        placeholder="Image URL"
                        value={adForm.image}
                        onChange={e => setAdForm({ ...adForm, image: e.target.value })}
                        className="input"
                    />
                    <input
                        type="text"
                        placeholder="Link"
                        value={adForm.link}
                        onChange={e => setAdForm({ ...adForm, link: e.target.value })}
                        className="input"
                    />
                    <button onClick={handleAdCreate} className="btn col-span-1 md:col-span-3">Add Ad</button>
                </div>

                <ul className="space-y-3">
                    {Array.isArray(ads) && ads.length > 0 ? (
                        ads.map(ad => (
                            <li key={ad._id} className="flex justify-between items-center bg-gray-50 p-3 rounded-md shadow-sm">
                                <div>
                                    <strong>{ad.title}</strong>
                                    <p className="text-sm text-gray-500">{ad.link}</p>
                                </div>
                                <button onClick={() => handleDelete('ads', ad._id)} className="text-red-500 hover:underline">Delete</button>
                            </li>
                        ))
                    ) : (
                        <h3 className="text-gray-500">No ads found</h3>
                    )}
                </ul>

            </section> */}
        </div>
    );
};

export default Admin;
