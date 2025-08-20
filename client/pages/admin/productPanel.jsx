import { useState, useEffect } from 'react';
import axios from 'axios';

const productPanel = () => {
    const [products, setProducts] = useState([]);
    const [productForm, setProductForm] = useState({ name: '', price: '', description: '' });

    useEffect(() => {
        fetchData();
    }, []);

    const API_BASE = 'http://localhost:5555/api';

    const fetchData = async () => {
        const prodRes = await axios.get(`${API_BASE}/products`);
        setProducts(prodRes.data);
    };

    const handleProductCreate = async () => {
        try {
            await axios.post(`${API_BASE}/products`, productForm);
            setProductForm({ name: '', price: '', description: '' });
            await fetchData();
            alert("✅ Product added successfully!");
        } catch (error) {
            console.error("Product creation failed:", error);
            alert("❌ Failed to add product.");
        }
    };

    const handleDelete = async (type, id) => {
        try {
            await axios.delete(`${API_BASE}/${type}/${id}`);
            await fetchData();
            alert("🗑️ Item deleted successfully!");
        } catch (error) {
            console.error("Delete failed:", error);
            alert("❌ Failed to delete item.");
        }
    };


    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Admin Dashboard</h1>

            {/* Products Section */}
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
        </div>
    );
};

export default productPanel;
