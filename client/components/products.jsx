import { NavLink } from 'react-router-dom'

import DefaultPlaceholder from '../src/assets/defaults/default-placeholder.webp'

const products = () => {
    return (
        <div className='productList mt-[30px]'>
            {/* Simulate long content */}
            {[...Array(5)].map((_, i) => (
                <NavLink
                    key={i}
                    to='/viewproduct/IBW-Book#productProfile'
                    className='productCard w-[250px] h-[350px] bg-gray-200 rounded-xl flex flex-col justify-between items-center py-5'
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    <div className='productCardImg w-[80%] h-[50%]'>
                        <img src={DefaultPlaceholder} alt="Product Img" className='w-full h-full object-fit  bg-gray-300  rounded-md' />
                    </div>
                    <div className='productCardImg w-[80%] h-[30%]'>
                        <h3>Product Name</h3>
                        <h3>Product Author</h3>
                        <h3>Product Price</h3>
                    </div>
                    <button className='w-[80%] py-2 px-4 bg-gray-400 rounded-lg'>Add to Cart</button>
                </NavLink>
            ))}

        </div>
    )
}

export default products