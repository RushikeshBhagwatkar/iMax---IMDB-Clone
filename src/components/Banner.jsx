import React from 'react'

const Banner = () => {
  return (
    <div className='h-[20vh] md:h-[60vh] bg-cover bg-center flex items-end' style={{backgroundImage: 'url(https://collider.com/wp-content/uploads/dark-knight-rises-movie-poster-banner-batman.jpg)'}}>
     <div className='text-white text-xl bg-gray-900/70 text-center w-full p-4'>Dark Knight Rises</div>
    </div>
    
  )
}

export default Banner