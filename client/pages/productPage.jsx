import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

import Products from '../components/products';
import DefaultAvatar from '../src/assets/defaults/default-avatar.jpg';

const API_ORIGIN = "http://localhost:5555";
const API_BASE = `${API_ORIGIN}/api`;
const UPLOADS_BASE = `${API_ORIGIN}/uploads`;

const api = axios.create({
    baseURL: API_BASE,
    withCredentials: false,
});

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

const ProductPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [imgVersion, setImgVersion] = useState(0);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                setLoading(true);
                const res = await api.get(`/products/${id}`);
                setProduct(res.data);
                setImgVersion(prev => prev + 1);
            } catch (err) {
                console.error('Error fetching product:', err);
            } finally {
                setLoading(false);
            }
        };
        fetchProduct();
    }, [id]);

    useEffect(() => {
        if (!product) return;

        const el = document.querySelector(".swiper-container");
        if (!el) return;

        if (el.swiper) {
            try { el.swiper.destroy(true, true); } catch { }
        }

        new Swiper(el, {
            loop: false,
            slidesPerView: 1,
            spaceBetween: 10,
            navigation: {
                nextEl: el.querySelector(".swiper-button-next"),
                prevEl: el.querySelector(".swiper-button-prev"),
            },
            pagination: { el: el.querySelector(".swiper-pagination"), clickable: true },
        });
    }, [product]);

    if (loading) return <div className="py-20 text-center text-gray-500 text-lg">Loading product...</div>;
    if (!product) return <div className="py-20 text-center text-red-500 text-lg">Product not found.</div>;

    const images = Array.isArray(product.images) && product.images.length > 0 ? product.images : [DefaultAvatar];

    return (
        <div className="px-6 md:px-12 py-10 space-y-12">
            {/* Product Main Section */}
            <div className="bg-white shadow-lg rounded-xl p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Swiper Image Gallery */}{/* Swiper Image Gallery */}
                <div className="w-full flex justify-center">
                    <div className="swiper-container relative w-full max-w-lg rounded-xl shadow-lg overflow-hidden">
                        <div className="swiper-wrapper">
                            {images.map((img, idx) => (
                                <div className="swiper-slide flex justify-center items-center" key={idx}>
                                    <img
                                        src={resolveImageUrl(img, imgVersion) || DefaultAvatar}
                                        alt={product.name || "Product Image"}
                                        className="w-full h-[60vh] object-contain"
                                        onError={(e) => { e.currentTarget.src = DefaultAvatar; }}
                                    />
                                </div>
                            ))}
                        </div>

                        {images.length > 1 && (
                            <>
                                <div className="swiper-button-next absolute top-1/2 right-2 -translate-y-1/2 text-white z-10"></div>
                                <div className="swiper-button-prev absolute top-1/2 left-2 -translate-y-1/2 text-white z-10"></div>
                                <div className="swiper-pagination w-full absolute bottom-2 space-x-2"></div>
                            </>
                        )}
                    </div>
                </div>


                {/* Product Info */}
                <div className="flex flex-col justify-between space-y-6">
                    <div>
                        <h1 className="text-4xl font-bold text-gray-800">{product.name || 'Unnamed Product'}</h1>
                        <p className="text-2xl font-semibold text-green-600 mt-2">₹{product.price || 'N/A'}</p>
                    </div>

                    <button className="w-full md:w-48 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
                        Add to Cart
                    </button>

                    {/* Product Details Boxes */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        <div className="p-4 bg-gray-50 rounded-lg shadow">
                            <h3 className="font-semibold text-lg mb-2">General Info</h3>
                            <p><span className="font-medium">Author:</span> {product.author || 'N/A'}</p>
                            <p><span className="font-medium">Brand:</span> {product.brand || 'N/A'}</p>
                            <p><span className="font-medium">Type:</span> {product.type || 'N/A'}</p>
                        </div>

                        <div className="p-4 bg-gray-50 rounded-lg shadow">
                            <h3 className="font-semibold text-lg mb-2">Dimensions & Weight</h3>
                            <p><span className="font-medium">Weight:</span> {product.weight || 'N/A'}</p>
                            <p><span className="font-medium">Length:</span> {product.length || 'N/A'}</p>
                            <p><span className="font-medium">Breadth:</span> {product.breadth || 'N/A'}</p>
                            <p><span className="font-medium">Height:</span> {product.height || 'N/A'}</p>
                        </div>

                        <div className="p-4 bg-gray-50 rounded-lg shadow">
                            <h3 className="font-semibold text-lg mb-2">Pricing</h3>
                            <p><span className="font-medium">Min Req Pieces:</span> {product.minPieces || 'N/A'}</p>
                            <p><span className="font-medium">Total Amount:</span> ₹{product.totalAmount || 'N/A'}</p>
                            <p><span className="font-medium">Price per Item:</span> ₹{product.unitPrice || product.price || 'N/A'}</p>
                        </div>

                        <div className="p-4 bg-gray-50 rounded-lg shadow">
                            <h3 className="font-semibold text-lg mb-2">Description</h3>
                            <p className="text-gray-600">{product.description || 'No description available.'}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Related Products Section */}
            <div className="bg-white shadow-lg rounded-xl p-6 md:p-10">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Related Products</h2>
                <Products />
            </div>
        </div>
    );
};

export default ProductPage;
