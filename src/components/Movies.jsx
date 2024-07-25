import React, { useEffect, useState } from 'react'
import MovieCards from './MovieCards'
import axios from 'axios'
import Pagination from './Pagination'

const Movies = () => {

    //create state to import movies in cards
    const [movies , setMovies] = useState([])

    useEffect (()=>{
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=799305c3a5490ab50020c27cfb40b4fd&language=en-US&page=1`).then(function(res){
            setMovies(res.data.results)
            // to populate movie result
        })
    }, [])
  return (
    <div className='p-5'>
        <div className='text-2xl m-5 font-bold text-center'>
            Trending Movies
        </div>
        <div className='flex flex-row  flex-wrap gap-8 justify-around'>
            
            {movies.map((movObj)=>{
                return <MovieCards poster_path={movObj.poster_path} name={movObj.original_title} />
            })}
            {/* for every movie object return moviecard */}
            
        </div>
        <Pagination/>
            
    </div>
  )
}

export default Movies