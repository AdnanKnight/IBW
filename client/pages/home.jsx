import React, { useState } from 'react';

/*                                             COMPONENTS                                                      */
import HeroAd from '../components/heroAd'
import Products from '../components/products'


const home = () => {

    const [product, setProduct] = useState([])


    return (
        <div className='py-10 px-7'>
            
            <HeroAd />

            <Products />
            
        </div>
    )
}

export default home