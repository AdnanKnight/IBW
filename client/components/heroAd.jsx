import React from 'react'

const heroAd = () => {
    return (
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
    )
}

export default heroAd