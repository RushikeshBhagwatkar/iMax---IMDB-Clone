import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import {BrowserRouter, Routes, Route}  from 'react-router-dom'  //to create router
import Movies from './components/Movies'
import Watchlist from './components/Watchlist'
import Banner from './components/Banner'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<><Banner/><Movies/></>} />
          <Route path='/watchlist' element={<Watchlist/>} />
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
