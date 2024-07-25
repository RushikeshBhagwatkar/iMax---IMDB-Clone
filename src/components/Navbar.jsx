import React from 'react'
import Logo from '../assets/movie.gif'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className=' mx-auto w-full flex  border space-x-8 items-center pl-3 py-2 bg-slate-800'>
        <img className='w-[50px]' src={Logo} alt="logo" />
        <Link className='text-blue-500 text-2xl font-bold' to="/">Movies</Link>
        <Link className='text-blue-500 text-2xl font-bold' to="/watchlist">Watchlist</Link>
    </div>
  )
}

export default Navbar