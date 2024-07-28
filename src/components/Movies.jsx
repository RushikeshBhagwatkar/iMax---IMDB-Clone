import React, { useEffect, useState } from 'react'
import MovieCards from './MovieCards'
import axios from 'axios'
import Pagination from './Pagination'

const Movies = ({handleAddtoWatchList , handleRemoveFromWatchList, watchlist}) => {

    //create state to import movies in cards
    const [movies , setMovies] = useState([])
    const [pageNo , setPageNo] = useState(1)

    const handlePrev = ()=>{
        if(pageNo===1){
            setPageNo(pageNo)
        }
        else{
            setPageNo(pageNo - 1)
        }
        
    }
    
    const handleNex = ()=>{
        setPageNo(pageNo + 1)
    }

    useEffect (()=>{
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=799305c3a5490ab50020c27cfb40b4fd&language=en-US&page=${pageNo}`).then(function(res){
            setMovies(res.data.results)
            // to populate movie result
        })
    }, [pageNo])
  return (
    <div className='p-5 text-white bg-slate-950' >
        <div className='text-2xl m-5 font-bold text-center'>
            Trending Movies
        </div>
        <div className='flex flex-row  flex-wrap gap-8 justify-around'>
            
            {movies.map((movieObj)=>{
                return <MovieCards key={movieObj.id} movieObj={movieObj} poster_path={movieObj.poster_path} name={movieObj.original_title} handleAddtoWatchList={handleAddtoWatchList} handleRemoveFromWatchList={handleRemoveFromWatchList} watchlist={watchlist}/>
            })}
            {/* for every movie object return moviecard */}
            
        </div>
        <Pagination pageNo={pageNo} handleNex={handleNex} handlePrev={handlePrev} />
            
    </div>
  )
}

export default Movies
