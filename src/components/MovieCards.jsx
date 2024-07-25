import React from 'react'

function MovieCards({poster_path, name}){
  return (
    <div className='h-[40vh] w-[200px] bg-cover bg-center rounded-xl hover:cursor-pointer hover:scale-110 duration-300 flex flex-row items-end' style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`}}>
        
        <div className=' text-white text-xl w-full text-center bg-gray-900/60 '>
            {name}
        </div>
    </div>
  )
}

export default MovieCards
//install axios - it handles all http request
//https://api.themoviedb.org/3/movie/popular?api_key=799305c3a5490ab50020c27cfb40b4fd&language=en-US&page=1