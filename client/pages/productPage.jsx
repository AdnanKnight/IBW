import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

import Products from '../components/products';
import DefaultAvatar from '../src/assets/defaults/default-avatar.jpg';

const ProductPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    const API_BASE = 'http://localhost:5555/api'; // Adjust as needed

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await axios.get(`${API_BASE}/products/${id}`);
                setProduct(res.data);
            } catch (err) {
                console.error('Error fetching product:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    if (loading) {
        return <div className='py-10 px-7 text-center text-gray-500'>Loading product...</div>;
    }

    if (!product) {
        return <div className='py-10 px-7 text-center text-red-500'>Product not found.</div>;
    }

    return (
        <div className='py-10 px-7'>
            <div className='productSection rounded-xl bg-gray-200'>
                <div id='productProfile' className='w-full h-[50dvh] flex justify-around items-center px-15'>
                    <img
                        src={product.image || DefaultAvatar}
                        alt={product.name}
                        className='w-[47%] h-[80%] rounded-lg bg-gray-400 object-cover'
                    />
                    <span className='w-[45%] h-[80%] flex flex-col justify-center'>
                        <h3 className='text-3xl font-bold'>Product Name: {product.name}</h3>
                        <h3 className='text-xl'>Price: ₹{product.price}</h3>
                        <button className='bg-blue-500 w-[200px] h-[50px] rounded-lg mt-7 cursor-pointer'>
                            Add to cart
                        </button>
                    </span>
                </div>

                <div className='w-full h-full flex flex-col justify-center items-center px-15 pb-15'>
                    <h3 className='text-3xl font-bold w-full mb-10'>Product Details:</h3>
                    <div className='w-full h-full flex space-x-4 justify-end align-center'>
                        <span className="border-r-[1px] border-r-black w-[25%] flex flex-col justify-start">
                            <h3 className="text-lg mb-4 font-bold">Product Details:</h3>
                            <p>Author: {product.author || 'N/A'}</p>
                            <p>Brand: {product.brand || 'N/A'}</p>
                            <p>Type: {product.type || 'N/A'}</p>
                            <p>Weight: {product.weight || 'N/A'}</p>
                        </span>
                        <span className="border-r-[1px] border-r-black w-[25%] flex flex-col justify-start">
                            <h3 className="text-lg mb-4 font-bold">Description:</h3>
                            <p>{product.description || 'No description available.'}</p>
                        </span>
                        <span className="border-r-[1px] border-r-black w-[25%] flex flex-col justify-start">
                            <h3 className="text-lg mb-4 font-bold">Size:</h3>
                            <p>Length: {product.size?.length || 'N/A'}</p>
                            <p>Breadth: {product.size?.breadth || 'N/A'}</p>
                            <p>Height: {product.size?.height || 'N/A'}</p>
                        </span>
                        <span className="w-[25%] flex flex-col justify-start">
                            <h3 className="text-lg mb-4 font-bold">Whole Details:</h3>
                            <p>Min Req Pieces: {product.minPieces || 'N/A'}</p>
                            <p>Total Amount: ₹{product.totalAmount || 'N/A'}</p>
                            <p>Price per Item: ₹{product.unitPrice || product.price}</p>
                        </span>
                    </div>
                </div>
            </div>

            <div className='recommendedProductSection mt-[30px]'>
                <div className='w-full h-fit bg-gray-200 rounded-xl flex flex-col justify-around items-center px-15 py-10'>
                    <h3 className='text-3xl font-bold'>Related Products</h3>
                    <Products />
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
