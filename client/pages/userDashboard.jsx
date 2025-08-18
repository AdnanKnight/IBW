import React from 'react'

/*                                              IMAGES                                                     */
import DefaultAvatar from '../src/assets/defaults/default-avatar.jpg'

const userDashboard = () => {
    return (
        <div className='py-10 px-7'>
            <div className='profileSection'>
                <div className='w-[49%] h-[30dvh] bg-gray-200 rounded-xl flex justify-around items-center px-15'>
                    <img src={DefaultAvatar} alt="user Image" className='w-[200px] h-[200px] rounded-[50%] bg-gray-200 text-center object-cover' />
                    <span>
                        <h3 className='text-3xl font-bold'>Welcome back,</h3>
                        <h3 className='text-xl'>UserName</h3>
                    </span>
                </div>
                <div className='w-[49%] h-[30dvh] bg-gray-200 rounded-xl flex flex-col justify-center items-start gap-7 px-15'>
                    <span>
                        <h3 className='text-2xl font-bold mb-2'>Your Address:</h3>
                        <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam culpa, ab consectetur inventore architecto impedit.</h3>
                    </span>
                    <span>
                        <h3 className='text-2xl font-bold mb-2'>Your Billing number:</h3>
                        <h3>+1 123 456 7890</h3>
                        <h3>+1 123 456 7890</h3>
                    </span>
                </div>
            </div>
            <div className="orderSection mt-10 py-10 px-15 bg-gray-200 rounded-xl" id='previous-orders'>
                <h3 className='text-2xl font-bold mb-5'>Previous Orders</h3>
                <div className="orderList w-full flex flex-col gap-[15px]">
                    <li className='w-full flex justify-between border-[1px] border-[var(--accent-dark)] py-3 px-2 rounded-lg'>Order No. 1 <span>total-Items</span> <span>Total-price</span></li>
                    <li className='w-full flex justify-between border-[1px] border-[var(--accent-dark)] py-3 px-2 rounded-lg'>Order No. 2 <span>total-Items</span> <span>Total-price</span></li>
                    <li className='w-full flex justify-between border-[1px] border-[var(--accent-dark)] py-3 px-2 rounded-lg'>Order No. 3 <span>total-Items</span> <span>Total-price</span></li>
                </div>
            </div>
            <div className="orderSection mt-10 py-10 px-15 bg-gray-200 rounded-xl" id='contact-support-team'>
                <h3 className='text-2xl font-bold mb-5'>Contact Support Team</h3>
                <div className="orderList flex flex-col gap-[10px]">
                    <li>Email - support@gmail.com</li>
                    <li>Phone no. +91-12345-67890</li>
                </div>
            </div>
        </div>
    )
}

export default userDashboard