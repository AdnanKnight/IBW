import React from 'react'
import { useParams } from 'react-router-dom';

import Products from '../components/products';

import DefaultAvatar from '../src/assets/defaults/default-avatar.jpg'

const productPage = () => {
    const { id } = useParams()

    return (
        <div className='py-10 px-7'>
            <div className='productSection rounded-xl bg-gray-200'>
                <div className='w-full h-[50dvh] flex justify-around items-center px-15'>
                    <img src={DefaultAvatar} alt="user Image" className='w-[47%] h-[80%] rounded-lg bg-gray-400 text-center object-cover' />
                    <span className='w-[45%] h-[80%] flex flex-col justify-center'>
                        <h3 className='text-3xl font-bold'>Product Name : {id}</h3>
                        <h3 className='text-xl'>Price: $199.99 </h3>
                        <button className='bg-blue-500 w-[200px] h-[50px] rounded-lg mt-7 cursor-pointer'>Add to cart</button>
                    </span>
                </div>
                <div className='w-full h-full flex flex-col justify-center items-center px-15 pb-15'>
                    <h3 className='text-3xl font-bold w-full mb-10'>Product Details: </h3>
                    <div className='w-full h-full flex space-x-4 justify-end align-center'>
                        <span className="border-r-[1px] border-r-black w-[25%] flex flex-col justify-start align-start">
                            <h3 className="text-lg mb-4 font-bold">Product Details : </h3>
                            <p>Author : </p>
                            <p>Brand : </p>
                            <p>Type : </p>
                            <p>Weight : </p>
                        </span>
                        <span className="border-r-[1px] border-r-black w-[25%] flex flex-col justify-start align-start">
                            <h3 className="text-lg mb-4 font-bold">Discription : </h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, reiciendis repellat?</p>
                        </span>
                        <span className="border-r-[1px] border-r-black w-[25%] flex flex-col justify-start align-start">
                            <h3 className="text-lg mb-4 font-bold">Size : </h3>
                            <p>Lenght : </p>
                            <p>Breath : </p>
                            <p>Height : </p>
                        </span>
                        <span className="w-[25%] flex flex-col justify-start align-start">
                            <h3 className="text-lg mb-4 font-bold">Whole Details :</h3>
                            <p>Min Req pieces : </p>
                            <p>Total amount : </p>
                            <p>Price per item : </p>
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
    )
}

export default productPage