import { useEffect, useState } from "react";
import axios from "axios";
import Swiper from "swiper/bundle";
import "swiper/swiper-bundle.css";

const API_ORIGIN = "http://localhost:5555";
const API_BASE = `${API_ORIGIN}/api`;
const UPLOADS_BASE = `${API_ORIGIN}/uploads`;

const api = axios.create({
    baseURL: API_BASE,
    withCredentials: false,
});

const isEmpty = (v) =>
    v === null || v === undefined || (typeof v === "string" && v.trim() === "");

const resolveImageUrl = (img, version = 0) => {
    if (!img) return "";
    const bump = `v=${version}`;
    if (typeof img === "string" && (img.startsWith("http://") || img.startsWith("https://"))) {
        return img.includes("?") ? `${img}&${bump}` : `${img}?${bump}`;
    }
    if (typeof img === "string" && img.startsWith("blob:")) return img;
    const url = `${UPLOADS_BASE}/${img}`;
    return url.includes("?") ? `${url}&${bump}` : `${url}?${bump}`;
};

const ProductPanel = () => {
    const [products, setProducts] = useState([]);
    const [productForm, setProductForm] = useState({
        name: "",
        price: "",
        description: "",
        author: "",
        brand: "",
        type: "",
        weight: "",
        length: "",
        breadth: "",
        height: "",
        images: [],
    });
    const [loading, setLoading] = useState(false);
    const [expandedProductId, setExpandedProductId] = useState(null);
    const [editForm, setEditForm] = useState({});
    const [imgVersion, setImgVersion] = useState({});

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            setLoading(true);
            const res = await api.get("/products");
            const data = Array.isArray(res.data) ? res.data : res.data?.products || [];
            setProducts(data);

            setImgVersion((prev) => {
                const next = { ...prev };
                data.forEach((p) => {
                    if (next[p._id] == null) next[p._id] = 0;
                });
                return next;
            });
        } catch (error) {
            console.error("Fetch failed:", error);
            alert("❌ Failed to load products.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const els = document.querySelectorAll(".swiper");
        const instances = [];

        els.forEach((el) => {
            if (el.swiper) {
                try { el.swiper.destroy(true, true); } catch { }
            }
            const instance = new Swiper(el, {
                loop: false,
                slidesPerView: 1,
                slidesPerGroup: 1,
                autoplay: false,
                passiveListeners: true,
                pagination: { el: el.querySelector(".swiper-pagination"), clickable: true },
                navigation: { nextEl: el.querySelector(".swiper-button-next"), prevEl: el.querySelector(".swiper-button-prev") },
            });
            instances.push(instance);
        });

        return () => { instances.forEach(i => { try { i.destroy(true, true); } catch { } }); };
    }, [products, editForm]);

    const handleProductCreate = async () => {
        const requiredFields = ["name", "price", "description", "author", "brand", "type", "weight", "length", "breadth", "height"];
        const missing = requiredFields.some(f => isEmpty(productForm[f]));
        if (missing) { alert("⚠️ Please fill all fields."); return; }
        if (!productForm.images || productForm.images.length === 0) { alert("⚠️ Please add at least one image."); return; }

        const formData = new FormData();
        requiredFields.forEach(f => formData.append(f, String(productForm[f])));
        productForm.images.forEach(file => formData.append("images", file));

        try {
            setLoading(true);
            await api.post("/products", formData, { headers: { "Content-Type": "multipart/form-data" } });
            alert("✅ Product created successfully!");
            setProductForm({ name: "", price: "", description: "", author: "", brand: "", type: "", weight: "", length: "", breadth: "", height: "", images: [] });
            await fetchProducts();
        } catch (error) {
            console.error("Creation failed:", error?.response || error);
            alert(`❌ Failed to create product.${error?.response?.data?.message ? " " + error.response.data.message : ""}`);
        } finally { setLoading(false); }
    };

    const toggleExpand = (product) => {
        const isExpanded = expandedProductId === product._id;
        if (isExpanded) { setExpandedProductId(null); return; }

        setEditForm(prev => ({
            ...prev,
            [product._id]: {
                name: product.name,
                price: product.price,
                description: product.description,
                author: product.author,
                brand: product.brand,
                type: product.type,
                weight: product.weight,
                length: product.length,
                breadth: product.breadth,
                height: product.height,
                existingImages: Array.isArray(product.images) ? [...product.images] : [],
                newImages: [],
            }
        }));
        setExpandedProductId(product._id);
    };

    const handleUpdate = async (id) => {
        const original = products.find(p => p._id === id);
        if (!original) return alert("Product not found locally");
        const edited = editForm[id] || {};
        const formData = new FormData();
        const fields = ["name", "price", "description", "author", "brand", "type", "weight", "length", "breadth", "height"];
        fields.forEach(f => { const value = edited[f] !== undefined ? edited[f] : original[f]; if (value !== undefined) formData.append(f, String(value)); });
        const existingImages = edited.existingImages !== undefined ? edited.existingImages : original.images || [];
        formData.append("existingImages", JSON.stringify(existingImages));
        if (edited.newImages && edited.newImages.length > 0) edited.newImages.forEach(file => formData.append("images", file));

        try {
            setLoading(true);
            await api.put(`/products/${id}`, formData, { headers: { "Content-Type": "multipart/form-data" } });

            setProducts(prev => prev.map(p => {
                if (p._id !== id) return p;
                const updated = { ...p };
                fields.forEach(f => { if (edited[f] !== undefined) updated[f] = edited[f]; });
                updated.images = existingImages;
                return updated;
            }));

            setImgVersion(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
            alert("✏️ Product updated successfully!");
            setExpandedProductId(null);
            setEditForm(prev => ({ ...prev, [id]: {} }));
            await fetchProducts();
        } catch (err) {
            console.error("Update failed:", err?.response || err);
            alert(`❌ Failed to update product.${err?.response?.data?.message ? " " + err.response.data.message : ""}`);
        } finally { setLoading(false); }
    };

    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this product?")) return;
        try {
            setLoading(true);
            await api.delete(`/products/${id}`);
            alert("🗑️ Product deleted successfully!");
            setProducts(prev => prev.filter(p => p._id !== id));
            if (expandedProductId === id) setExpandedProductId(null);
            setEditForm(prev => { const copy = { ...prev }; delete copy[id]; return copy; });
        } catch (err) {
            console.error("Delete failed:", err?.response || err);
            alert("❌ Failed to delete product.");
        } finally { setLoading(false); }
    };

    const renderInput = (label, value, onChange, type = "text") => (
        <div className="flex flex-col space-y-1">
            <label className="text-sm font-medium text-gray-600">{label}</label>
            <input type={type} placeholder={label} value={value} onChange={onChange} className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
        </div>
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-8">
            <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Product Panel Dashboard</h1>

            {/* Create Product Form */}
            <section className="bg-white shadow-lg rounded-xl p-6 mb-10">
                <h2 className="text-2xl font-semibold mb-4 text-green-600">➕ Add New Product</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {Object.keys(productForm).filter(k => k !== "images").map(key =>
                        renderInput(
                            key.charAt(0).toUpperCase() + key.slice(1),
                            productForm[key],
                            e => setProductForm(prev => ({ ...prev, [key]: e.target.value })),
                            key === "price" ? "number" : "text"
                        )
                    )}

                    <div className="flex flex-col space-y-1">
                        <label className="text-sm font-medium text-gray-600">Upload Images</label>
                        <input
                            type="file"
                            multiple
                            accept="image/*"
                            onChange={e => setProductForm(prev => ({ ...prev, images: Array.from(e.target.files || []) }))}
                            className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        {productForm.images?.length > 0 && (
                            <div className="flex gap-2 mt-2 flex-wrap">
                                {productForm.images.map((f, i) => (
                                    <img key={i} src={URL.createObjectURL(f)} alt={`new-${i}`} className="w-16 h-16 object-cover rounded border" />
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                <button
                    onClick={handleProductCreate}
                    disabled={loading}
                    className="mt-6 px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
                >
                    {loading ? "Creating..." : "Add Product"}
                </button>
            </section>

            {/* Products List */}
            <section className="bg-white shadow-md rounded-xl p-6">
                <h2 className="text-2xl font-semibold mb-6 text-blue-600">📦 Existing Products</h2>

                {products.length > 0 ? (
                    <ul className="flex flex-col gap-8">
                        {products.map(product => {
                            const isExpanded = expandedProductId === product._id;
                            const form = editForm[product._id] || {};
                            const version = imgVersion[product._id] || 0;

                            const display = {
                                name: form.name ?? product.name,
                                price: form.price ?? product.price,
                                description: form.description ?? product.description,
                                author: form.author ?? product.author,
                                brand: form.brand ?? product.brand,
                                type: form.type ?? product.type,
                                weight: form.weight ?? product.weight,
                                length: form.length ?? product.length,
                                breadth: form.breadth ?? product.breadth,
                                height: form.height ?? product.height,
                                existingImages: form.existingImages ?? product.images ?? [],
                                newImages: form.newImages ?? [],
                            };

                            return (
                                <li key={product._id} className="bg-white border border-gray-300 rounded-lg shadow-sm p-6 flex flex-col w-full">
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="text-xl font-semibold text-gray-800">{display.name}</h3>
                                        <span className="text-lg font-bold text-green-600">₹{display.price}</span>
                                    </div>

                                    <div className="w-full mb-4">
                                        <div className="swiper w-full h-64 rounded-lg shadow">
                                            <div className="swiper-wrapper">
                                                {display.existingImages.map((img, idx) => (
                                                    <div className="swiper-slide" key={`existing-${idx}`}>
                                                        <img src={resolveImageUrl(img, version)} alt="" className="w-full h-64 object-cover rounded-lg" onError={e => { e.currentTarget.src = "https://via.placeholder.com/600x400?text=No+Image"; }} />
                                                    </div>
                                                ))}
                                                {display.newImages.map((file, idx) => (
                                                    <div className="swiper-slide" key={`new-${idx}`}>
                                                        <img src={URL.createObjectURL(file)} alt="" className="w-full h-64 object-cover rounded-lg border-2 border-blue-400" />
                                                    </div>
                                                ))}
                                            </div>

                                            {display.existingImages.length + display.newImages.length > 1 && (
                                                <>
                                                    <div className="swiper-pagination"></div>
                                                    <div className="swiper-button-next"></div>
                                                    <div className="swiper-button-prev"></div>
                                                </>
                                            )}
                                        </div>
                                    </div>

                                    <p className="text-sm text-gray-500 mb-3">
                                        <span className="font-semibold">Brand:</span> {display.brand} • <span className="font-semibold">Type:</span> {display.type}
                                    </p>

                                    <button onClick={() => toggleExpand(product)} className="text-blue-600 hover:underline mb-3 self-start">
                                        {isExpanded ? "Hide Details" : "View Details"}
                                    </button>

                                    {isExpanded && (
                                        <div className="space-y-4 text-gray-700 text-sm">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {["name", "price", "description", "author", "brand", "type", "weight", "length", "breadth", "height"].map(key => (
                                                    <div key={key} className="flex flex-col space-y-1">
                                                        <label className="font-semibold">{key.charAt(0).toUpperCase() + key.slice(1)}</label>
                                                        <input
                                                            type={key === "price" ? "number" : "text"} // text for weight, length, breadth, height
                                                            value={display[key] ?? ""}
                                                            onChange={e => setEditForm(prev => ({ ...prev, [product._id]: { ...prev[product._id], [key]: e.target.value } }))}
                                                            className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                                        />
                                                    </div>
                                                ))}
                                            </div>

                                            <div>
                                                <label className="font-semibold">Images</label>
                                                <div className="flex space-x-3 overflow-x-auto py-2 mb-2">
                                                    {display.existingImages.map((imgUrl, idx) => (
                                                        <div key={`exist-${idx}`} className="relative">
                                                            <img src={resolveImageUrl(imgUrl, version)} alt="" className="w-20 h-20 object-cover rounded" onError={e => { e.currentTarget.src = "https://via.placeholder.com/150?text=No+Image"; }} />
                                                            <button type="button" onClick={() => { setEditForm(prev => { const cur = prev[product._id]?.existingImages ?? product.images ?? []; return { ...prev, [product._id]: { ...prev[product._id], existingImages: cur.filter((_, i) => i !== idx) } } }) }} className="absolute top-0 right-0 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">&times;</button>
                                                        </div>
                                                    ))}
                                                    {display.newImages.map((file, idx) => (
                                                        <div key={`new-${idx}`} className="relative">
                                                            <img src={URL.createObjectURL(file)} alt="" className="w-20 h-20 object-cover rounded border-2 border-blue-400" />
                                                            <button type="button" onClick={() => { setEditForm(prev => { const cur = prev[product._id]?.newImages ?? []; return { ...prev, [product._id]: { ...prev[product._id], newImages: cur.filter((_, i) => i !== idx) } } }) }} className="absolute top-0 right-0 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">&times;</button>
                                                        </div>
                                                    ))}
                                                </div>
                                                <input type="file" multiple accept="image/*" onChange={e => { const files = Array.from(e.target.files || []); setEditForm(prev => { const cur = prev[product._id]?.newImages ?? []; return { ...prev, [product._id]: { ...prev[product._id], newImages: [...cur, ...files] } } }) }} className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                                            </div>

                                            <div className="flex space-x-3 mt-4">
                                                <button onClick={() => handleUpdate(product._id)} disabled={loading} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">{loading ? "Updating..." : "Update"}</button>
                                                <button onClick={() => handleDelete(product._id)} disabled={loading} className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition">Delete</button>
                                            </div>
                                        </div>
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                ) : <p className="text-gray-500">No products found.</p>}
            </section>
        </div>
    );
};

export default ProductPanel;
