import React from 'react'

const CategoryMenu = () => {
  return (
    <div className='mx-6 mt-6'>
    <h2 className='text-xl font-semibold'>Find the best food</h2>
    <div className='my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden'>
    <button className='mr-2 bg-gray-200 rounded-lg p-1 hover:bg-green-500 hover:text-white'>All</button>
    <button className='mr-2 bg-gray-200 rounded-lg p-1 hover:bg-green-500  hover:text-white' >Lunch</button>
    <button className='mr-2 bg-gray-200 rounded-lg p-1 hover:bg-green-500  hover:text-white'>BreakFast</button>
    <button className='mr-2 bg-gray-200 rounded-lg p-1 hover:bg-green-500  hover:text-white'>Dinner</button>
    <button className='mr-2 bg-gray-200 rounded-lg p-1 hover:bg-green-500  hover:text-white'>Snacks</button>
    <button className='mr-2 bg-gray-200 rounded-lg p-1 hover:bg-green-500  hover:text-white'>Snacks</button>
    <button className='mr-2 bg-gray-200 rounded-lg p-1 hover:bg-green-500  hover:text-white'>Snacks</button>
    </div>
    
    
    </div>
  )
}

export default CategoryMenu