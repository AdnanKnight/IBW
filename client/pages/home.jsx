import React, { useState } from 'react';





const home = () => {

    const [product, setProduct] = useState([])


    return (
        <div className='py-10 px-7'>
            <div className='heroAd'>
                <div className='heroAdSec w-[49%] h-full flex flex-col justify-between'>
                    <div className='w-full h-[30%] bg-gray-200 rounded-xl'>Ad-1</div>
                    <div className='w-full h-[30%] bg-gray-200 rounded-xl'>Ad-2</div>
                    <span className='w-full h-[30%] flex justify-between'>
                        <div className='w-[47%] h-full bg-gray-400 rounded-xl'>Ad-3</div>
                        <div className='w-[47%] h-full bg-gray-400 rounded-xl'>Ad-4</div>
                    </span>
                </div>
                <div className='heroAdSec w-[49%] h-full flex flex-col justify-between'>
                    <span className='w-full h-[50%] flex justify-between'>
                        <div className='w-[47%] h-full bg-gray-400 rounded-xl'>Ad-5</div>
                        <div className='w-[47%] h-full bg-gray-400 rounded-xl'>Ad-6</div>
                    </span>
                    <div className='w-full h-[45%] flex justify-between bg-gray-200 rounded-xl'>Ad-7</div>
                </div>
            </div>

            <div className='productList mt-[30px]'>
                {/* Simulate long content */}
                {[...Array(20)].map((_, i) => (
                    <div className='productCard w-[250px] h-[350px] bg-gray-200 rounded-xl flex flex-col justify-between items-center py-5'>
                        <div className='productCardImg w-[80%] h-[50%]'>
                            <img src="" alt="Product Img" className='w-full h-full object-fit  bg-gray-300  rounded-md' />
                        </div>
                        <div className='productCardImg w-[80%] h-[30%]'>
                            <h3>Product Name</h3>
                            <h3>Product Author</h3>
                            <h3>Product Price</h3>
                        </div>
                        <button className='w-[80%] py-2 px-4 bg-gray-400 rounded-lg'>Add to Cart</button>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default home