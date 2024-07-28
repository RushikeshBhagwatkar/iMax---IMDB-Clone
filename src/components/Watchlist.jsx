import React, { useState } from 'react'
import genreids from '../Utility/genre'
import { useEffect } from 'react'

const Watchlist = ({watchlist , setWatchList}) => {
    const [search , setSearch] = useState('')
    const [genreList, setGenreList] = useState(['All Genres'])
    const [currGenre , setCurrGenre] = useState('All Genre')

    let handleSearch = (e)=>{
        setSearch(e.target.value)
    };
    let handleFilter = ()=>{
        setCurrGenre((genre))
    }

    let sortIncreasing = ()=>{
       let sortedIncreasing =  watchlist.sort((movieA , movieB)=>{
            return movieA.vote_average - movieB.vote_average
        })
        setWatchList([...sortedIncreasing])
    }

    let sortDecreasing = ()=>{
       let sortedDecreasing =  watchlist.sort((movieA , movieB)=>{
            return movieB.vote_average - movieA.vote_average
        })
        setWatchList([...sortedDecreasing])
        
    }

    useEffect(() => {
      let temp = watchlist.map((movieObj)=>{
        return genreids[movieObj.genre_ids[0]]
      })
    
      setGenreList(['All Genres' , ...temp])
      console.log(temp)
    }, [watchlist])
    

    

  return (
    <>

     <div className='flex justify-center flex-wrap m-4'>
        {genreList.map((genre)=>{
           return <div onClick={()=>handleFilter(genre)} className={currGenre==genre?'bg-blue-400 flex justify-center h-[3rem] w-[9rem] rounded-xl text-white font-bold items-center mx-4' : 'bg-blue-400 flex justify-center h-[3rem] w-[9rem] rounded-xl text-white font-bold items-center mx-4' }>{genre}</div>
        })}
        <div className='bg-blue-400 flex justify-center h-[3rem] w-[9rem] rounded-xl text-white font-bold items-center mx-4'>Action</div>
          
     </div>
        <div className='flex justify-center my-4'>
           
         <input onChange={handleSearch} value={search} type="text" placeholder='Search Movies' className='h-[3rem] w-[18rem]  bg-gray-200 outline-none px-4'/>
        </div>

        <div className='overflow-hidden rounded-lg border border-gray-200 m-8'>
            <table className='w-full text-gray-500 text-center'>
                <thead className='border-b-2'>
                    <tr>
                        <th>Name</th>
                        <th className='flex justify-center'>
                            <div onClick={sortIncreasing} className='p-2'><i class="fa-solid fa-arrow-up"></i></div>
                            <th className='p-2'>Ratings</th>
                            <div onClick={sortDecreasing} className='p-2'><i class="fa-solid fa-arrow-down"></i></div>
                        </th>                        
                        <th>Popularity</th>
                        <th>Genre</th>
                    </tr>
                </thead>
                <tbody>
                    {watchlist.filter((movieObj)=>{
                        return movieObj.title.toLowerCase().includes(search.toLocaleLowerCase())
                    }).map((movieObj)=>{
                        return <tr className='border-b-2'>
                        <td className='flex items-center px-6 py-4'>
                            <img className='h-[6rem] w-[10rem]' src={`http://image.tmdb.org/t/p/original/${movieObj.backdrop_path}`} alt="" />
                            <div className='mx-10 text-center'>{movieObj.title}</div>
                        </td>

                        <td>{movieObj.vote_average}</td>
                        <td>{movieObj.popularity}</td>
                        <td>{genreids[movieObj.genre_ids[0]]}</td>
                        <td className='text-red-800'>Delete</td>

                    </tr>
                    })}
                    
                </tbody>
            </table>
        </div>
    </>
    
  )
}

export default Watchlist
