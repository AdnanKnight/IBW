import React, { useState } from 'react';

/*                                             COMPONENTS                                                      */
import HeroAd from '../components/heroAd'
import Products from '../components/products'


const home = () => {

    return (
        <section className='p-7'>

            <h1 className="text-4xl md:text-4xl font-extrabold leading-tight mb-4 font-[var(--apple)]">
                Islamic Book World — 
            </h1>

            <HeroAd />

            <Products />

        </section>
    )
}

export default home