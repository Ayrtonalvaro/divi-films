import React from 'react';
import MoviesGrid from '../components/MoviesGrid';
import { useEffect, useState } from 'react';
import { get } from '../utils/httpClient';
import Selector from '../components/Selector';



const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [moviesFilter, setMovieFilter] = useState([]);

  useEffect(() => {
    get('/discover/movie').then((data) => {
      setMovies(data.results);
      setLoading(false);
    });
  }, []);

  

  const sortByTitle = () => {
    setMovieFilter(
      movies.sort((a, b) => {
        if (a.original_title < b.original_title) {
          return -1;
        } else if (a.original_title > b.original_title) {
          return 1;
        } else {
          return 0;
        }
      })
    );
    console.log(movies)
  };

  const sortByPopularity = () => {
    setMovieFilter(
      movies.sort((a, b) => {
        if (a.popularity < b.popularity) {
          return -1;
        } else if (a.popularity > b.popularity) {
          return 1;
        } else {
          return 0;
        }
      })
    );
    console.log("popular")
  };

  if (loading)
    return (
      <div>
        <p className="text-6xl flex  justify-center mt-[100px]">
          Loading films...
        </p>
      </div>
    );
  return (
    <div className="mt-5  ">
      <h1 className="text-red-800 text-7xl uppercase ">films</h1>
      <div className="flex justify-center gap-10 text-slate-400 mt-5 ">
        <p className="uppercase"> Sort by </p>
        <div className="flex gap-5">
          <button
            className="rounded-sm w-20 bg-gray-700 hover:text-slate-300 hover:bg-gray-500"
            onClick={sortByTitle}
          >
            Title
          </button>
          <button
            className="rounded-sm w-20 bg-gray-700 hover:text-slate-300 hover:bg-gray-500"
            onClick={sortByPopularity}
          >
            Popularity
          </button>
          <button className="rounded-sm w-20 bg-gray-700 hover:text-slate-300 hover:bg-gray-500">Stars</button>
        </div>
      </div>

      <MoviesGrid movies={movies} />
    </div>
  );
};

export default Home;
