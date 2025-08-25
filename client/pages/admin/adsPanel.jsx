import { useState, useEffect } from 'react';
import axios from 'axios';

const AdsPanel = () => {
    const [ads, setAds] = useState([]);
    const [adForm, setAdForm] = useState({ title: '', image: '', link: '' });
    const [expandedAdId, setExpandedAdId] = useState(null);
    const [editForm, setEditForm] = useState({});
    const [loading, setLoading] = useState(false);

    const API_BASE = 'http://localhost:5555/api';

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            setLoading(true);
            const res = await axios.get(`${API_BASE}/ads`);
            setAds(res.data);
        } catch (error) {
            console.error("Fetch failed:", error);
            alert("❌ Failed to load ads.");
        } finally {
            setLoading(false);
        }
    };

    const handleAdCreate = async () => {
        if (!adForm.title || !adForm.image || !adForm.link) {
            alert("⚠️ All fields are required.");
            return;
        }
        try {
            setLoading(true);
            await axios.post(`${API_BASE}/ads`, adForm);
            setAdForm({ title: '', image: '', link: '' });
            await fetchData();
            alert("✅ Ad created successfully!");
        } catch (error) {
            console.error("Ad creation failed:", error);
            alert("❌ Failed to create ad.");
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this ad?")) return;
        try {
            setLoading(true);
            await axios.delete(`${API_BASE}/ads/${id}`);
            await fetchData();
            alert("🗑️ Ad deleted successfully!");
        } catch (error) {
            console.error("Delete failed:", error);
            alert("❌ Failed to delete ad.");
        } finally {
            setLoading(false);
        }
    };

    const handleUpdate = async (id) => {
        const updated = editForm[id];
        if (!updated?.title || !updated?.image || !updated?.link) {
            alert("⚠️ All fields must be filled before updating.");
            return;
        }
        try {
            setLoading(true);
            await axios.put(`${API_BASE}/ads/${id}`, updated);
            await fetchData();
            alert("✏️ Ad updated successfully!");
            setExpandedAdId(null);
        } catch (error) {
            console.error("Update failed:", error);
            alert("❌ Failed to update ad.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-8">
            <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">📋 Ads Panel Dashboard</h1>

            {/* Create Ad Form */}
            <section className="bg-white shadow-lg rounded-xl p-6 mb-10">
                <h2 className="text-2xl font-semibold mb-4 text-green-600">➕ Create New Ad</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <input
                        type="text"
                        placeholder="Title"
                        value={adForm.title}
                        onChange={e => setAdForm({ ...adForm, title: e.target.value })}
                        className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                    />
                    <input
                        type="text"
                        placeholder="Image URL"
                        value={adForm.image}
                        onChange={e => setAdForm({ ...adForm, image: e.target.value })}
                        className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                    />
                    <input
                        type="text"
                        placeholder="Link"
                        value={adForm.link}
                        onChange={e => setAdForm({ ...adForm, link: e.target.value })}
                        className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                    />
                </div>
                <button
                    onClick={handleAdCreate}
                    disabled={loading}
                    className="mt-4 w-full md:w-auto px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
                >
                    {loading ? "Creating..." : "Add Ad"}
                </button>
            </section>

            {/* Ads List */}
            <section className="bg-white shadow-md rounded-xl p-6">
                <h2 className="text-2xl font-semibold mb-6 text-blue-600">📢 Existing Ads</h2>
                {loading ? (
                    <p className="text-gray-500">Loading ads...</p>
                ) : ads.length > 0 ? (
                    <ul className="space-y-6">
                        {ads.map(ad => (
                            <li key={ad._id} className="border rounded-lg p-4 bg-gray-50 shadow-sm">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h3 className="font-bold text-lg text-gray-700">{ad.title}</h3>
                                        <p className="text-sm text-gray-500">{ad.link}</p>
                                    </div>
                                    <button
                                        onClick={() => setExpandedAdId(expandedAdId === ad._id ? null : ad._id)}
                                        className="text-blue-500 hover:underline"
                                    >
                                        {expandedAdId === ad._id ? "Hide" : "Details"}
                                    </button>
                                </div>

                                {expandedAdId === ad._id && (
                                    <div className="mt-4 space-y-3">
                                        <img
                                            src={ad.image}
                                            alt={ad.title}
                                            className="w-full h-48 object-cover rounded-md border"
                                        />
                                        <input
                                            type="text"
                                            placeholder="Edit Title"
                                            value={editForm[ad._id]?.title || ad.title}
                                            onChange={e =>
                                                setEditForm(prev => ({
                                                    ...prev,
                                                    [ad._id]: { ...prev[ad._id], title: e.target.value }
                                                }))
                                            }
                                            className="w-full border rounded-md p-2"
                                        />
                                        <input
                                            type="text"
                                            placeholder="Edit Image URL"
                                            value={editForm[ad._id]?.image || ad.image}
                                            onChange={e =>
                                                setEditForm(prev => ({
                                                    ...prev,
                                                    [ad._id]: { ...prev[ad._id], image: e.target.value }
                                                }))
                                            }
                                            className="w-full border rounded-md p-2"
                                        />
                                        <input
                                            type="text"
                                            placeholder="Edit Link"
                                            value={editForm[ad._id]?.link || ad.link}
                                            onChange={e =>
                                                setEditForm(prev => ({
                                                    ...prev,
                                                    [ad._id]: { ...prev[ad._id], link: e.target.value }
                                                }))
                                            }
                                            className="w-full border rounded-md p-2"
                                        />
                                        <div className="flex gap-4 mt-2">
                                            <button
                                                onClick={() => handleUpdate(ad._id)}
                                                disabled={loading}
                                                className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition"
                                            >
                                                Update
                                            </button>
                                            <button
                                                onClick={() => handleDelete(ad._id)}
                                                disabled={loading}
                                                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-gray-500">No ads found.</p>
                )}
            </section>
        </div>
    );
};

export default AdsPanel;
