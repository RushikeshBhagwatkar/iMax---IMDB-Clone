import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom"; //to create router
import Movies from "./components/Movies";
import Watchlist from "./components/Watchlist";
import Banner from "./components/Banner";
import { useEffect } from "react";

function App() {
  let [watchlist, setWatchList] = useState([]);

  const handleAddtoWatchList = (movieObj) => {
    let newWatchList = [...watchlist, movieObj]; //it will take older watchlist and add new movie
    localStorage.setItem('moviesApp', JSON.stringify(newWatchList))
    setWatchList(newWatchList);
    console.log(newWatchList);
  };

  let handleRemoveFromWatchList = (movieObj) => {
    let filteredWatchList = watchlist.filter((movie) => {
      return movie.id != movieObj.id;
    });
    setWatchList(filteredWatchList);
    console.log(filteredWatchList);
  };

  useEffect(() => {
    let moviesFromLocalStorage = localStorage.getItem('moviesApp')
    if(!moviesFromLocalStorage){
      return
    }
    setWatchList(JSON.parse(moviesFromLocalStorage))
  }, [])
  

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Movies
                  watchlist={watchlist}
                  handleAddtoWatchList={handleAddtoWatchList}
                  handleRemoveFromWatchList={handleRemoveFromWatchList}
                />
              </>
            }
          />
          <Route path="/watchlist" element={<Watchlist watchlist={watchlist} setWatchList={setWatchList}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
