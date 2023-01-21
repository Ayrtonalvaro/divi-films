import React from 'react';
import GridContainer from '../components/GridContainer';
import useMovies from '../hooks/useMovies';
import { API_KEY } from '../utils/Apikey';
const Films = () => {
  const URL_POPULAR = `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
  const movies = useMovies(URL_POPULAR);

  return (
    <div className="p-10">
      <h1 className=" text-orange-600 flex justify-center text-6xl font-sans uppercase">
        Popular movies
      </h1>
      <GridContainer movies={movies} />
    </div>
  );
};

export default Films;
