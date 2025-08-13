import React from 'react'

const userDashboard = () => {
  return (
    <div className='py-10 px-7'>
        <div className='profileSection'> 
            <div className='w-[49%] h-[30dvh] bg-blue-200 rounded-xl flex justify-around items-center px-15'>
                <img src="" alt="user Image" className='w-[200px] h-[200px] rounded-[50%] bg-gray-200'/>
                <span>
                <h3>Welcome back,</h3>
                <h3>UserName</h3>
                </span>
            </div>
            <div className='w-[49%] h-[30dvh] bg-blue-200 rounded-xl flex flex-col justify-around items-start px-15'>
                <span>
                    <h3>Your Address:</h3>
                    <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam culpa, ab consectetur inventore architecto impedit.</h3>
                </span>
                <span>
                    <h3>Your Billing number:</h3>
                    <h3>+1 123 456 7890</h3>
                    <h3>+1 123 456 7890</h3>
                </span>
            </div>
        </div>
    </div>
  )
}

export default userDashboard