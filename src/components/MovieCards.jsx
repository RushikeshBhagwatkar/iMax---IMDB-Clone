import React from "react";
import Watchlist from "./Watchlist";

function MovieCards({
  movieObj,
  poster_path,
  name,
  handleAddtoWatchList,
  handleRemoveFromWatchList,
  watchlist,
}) {
  function doesContain(movieObj) {
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id == movieObj.id) {
        return true;
      }
      
    }
    return false;
  }

  return (
    <div
      className="h-[40vh] w-[200px] bg-cover bg-center rounded-xl hover:cursor-pointer hover:scale-110 duration-300 flex flex-col justify-between items-end"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
      }}
    >
      {doesContain(movieObj) ? (
        <div
          onClick={() => handleRemoveFromWatchList(movieObj)}
          className="m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60"
        >
          &#10060;
        </div>
      ) : (
        <div
          onClick={() => handleAddtoWatchList(movieObj)}
          className="m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60"
        >
          &#128525;
        </div>
      )}

      <div className=" text-white text-xl w-full text-center bg-gray-900/60 ">
        {name}
      </div>
    </div>
  );
}

export default MovieCards;
//install axios - it handles all http request
//https://api.themoviedb.org/3/movie/popular?api_key=799305c3a5490ab50020c27cfb40b4fd&language=en-US&page=1
