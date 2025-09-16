import React from 'react'
import { useState } from 'react';
import axios from 'axios'

// Components
import Products from '../../components/products';


// ENV
const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const CLOUDINARY_API_KEY = import.meta.env.VITE_API_CLOUDINARY_API_KEY;
const CLOUDINARY_API_SECRET = import.meta.env.VITE_API_CLOUDINARY_API_SECRET;
const CLOUDINARY_CLOUD_NAME = import.meta.env.VITE_API_CLOUDINARY_CLOUD_NAME;
const CLOUDINARY_UPLOAD_PRESET = import.meta.env.VITE_API_CLOUDINARY_UPLOAD_PRESET;



const productPanel = () => {
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
        images: []
    })
    const [searchBar, setSearchBar] = useState("")

    const handleChange = e => {
        setProductForm({ ...productForm, [e.target.name]: e.target.value });
    };

    const handleImgChange = async (e) => {
        setProductForm(prev => (
            { ...prev, images: Array.from(e.target.files) }
        ))
    }

    const beforeSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            if (!productForm.images || productForm.images.length === 0) {
                alert("No images were selected.");
                return;
            }

            const uploadedUrls = [];
            for (let i = 0; i < productForm.images.length; i++) {
                const file = productForm.images[i];

                const formData = new FormData();
                formData.append("file", file);
                formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

                const res = await axios.post(
                    `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
                    formData
                );
                uploadedUrls.push(res.data.secure_url);
            }
            const updatedForm = {
                ...productForm,
                images: uploadedUrls
            };

            await submitHandler(updatedForm);
        }
        catch (err) {
            alert("Failed to upload image to the destination");
            console.log("Cloudinary upload error: ", err.response?.data)
        }
    };

    const submitHandler = async (formData) => {
        try {
            let res = await axios.post(`${BASE_URL}/api/products/create`,
                formData,
                { withCredentials: true }
            );

            alert(res.data.message);
        } catch (err) {
            alert("❌ Something went wrong while submitting the form");
            console.log(err.response?.data);
        }
    }


    return (
        <div>
            <form
                onSubmit={beforeSubmitHandler}
                encType="multipart/form-data"
                className="w-full h-full bg-gray-200 p-6 space-y-4 rounded-md shadow"
            >
                <div className="grid grid-cols-2 gap-4">
                    <input type="text" name="name" placeholder="Product Name" className="border border-gray-400 p-2 rounded" required onChange={handleChange} />
                    <input type="number" name="price" placeholder="Price (₹)" className="border border-gray-400 p-2 rounded" required onChange={handleChange} />
                    <input type="text" name="description" placeholder="Description" className="border border-gray-400 p-2 rounded col-span-2" required onChange={handleChange} />
                    <input type="text" name="author" placeholder="Author" className="border border-gray-400 p-2 rounded" required onChange={handleChange} />
                    <input type="text" name="brand" placeholder="Brand" className="border border-gray-400 p-2 rounded" required onChange={handleChange} />
                    <input type="text" name="type" placeholder="Type" className="border border-gray-400 p-2 rounded" required onChange={handleChange} />
                    <input type="text" name="weight" placeholder="Weight (kg)" className="border border-gray-400 p-2 rounded" required onChange={handleChange} />
                    <input type="text" name="length" placeholder="Length (cm)" className="border border-gray-400 p-2 rounded" required onChange={handleChange} />
                    <input type="text" name="breadth" placeholder="Breadth (cm)" className="border border-gray-400 p-2 rounded" required onChange={handleChange} />
                    <input type="text" name="height" placeholder="Height (cm)" className="border border-gray-400 p-2 rounded" required onChange={handleChange} />
                </div>

                <div>
                    <label className="block font-medium text-gray-700 mb-2">Upload Images</label>
                    <input type="file" name="images" multiple accept="image/*" className="block w-full border border-gray-400 p-2 rounded bg-white" required onChange={handleImgChange} />
                </div>

                <button
                    type="submit"
                    className="mt-4 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
                >
                    Create Product
                </button>
            </form>

            <div className='w-full bg-gray-200 p-6 space-y-4 rounded-md shadow mt-4'>
                <form onSubmit={e => {
                    e.preventDefault()
                }}
                    className='w-full h-[50px] flex bg-gray-200'
                >
                    <input type="text" className='w-full h-full bg-white' onChange={e => {
                        setSearchBar(e.target.value)
                    }}/>
                    <button type='submit' className='w-[20%] bg-blue-500'>Search Product</button>
                </form>
                {searchBar === "" ? (
                    <Products />
                    ) : (
                        <h1>{searchBar}</h1>
                    )}
            </div>
        </div>
    )
}

export default productPanel