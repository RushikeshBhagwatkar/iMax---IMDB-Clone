import React from 'react'

const Pagination = ({handlePrev , handleNex, pageNo}) => {
  return (
    <div className='bg-gray-400 text-black p-4 mt-8 w-full flex justify-center'>
        <div onClick={handlePrev} className='px-8 hover:cursor-pointer'><i class="fa-solid fa-arrow-left"></i></div>
        <div className='font-bold'>{pageNo}</div>
        <div onClick={handleNex} className='px-8 hover:cursor-pointer'>
        <i className="fa-solid fa-arrow-right"></i>
        </div>
    </div>
  )
}

export default Pagination
