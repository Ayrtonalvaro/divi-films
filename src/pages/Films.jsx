import React from 'react';
import GridContainer from '../components/GridContainer';
import useMovies from '../hooks/useMovies';
import { API_KEY } from '../utils/Apikey';
const Films = () => {
  const URL_POPULAR = `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
  const movies = useMovies(URL_POPULAR);

  return (
    <div>
      <h1 className="text-3xl text-orange-600">Popular movies</h1>
      <GridContainer movies={movies} />
    </div>
  );
};

export default Films;
