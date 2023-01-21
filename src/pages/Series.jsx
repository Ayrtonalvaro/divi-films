import React from 'react'
import GridContainer from '../components/GridContainer'
import useMovies from '../hooks/useMovies'
import useMovieByCategory from '../hooks/useMovieByCategory'
import { API_KEY } from '../utils/Apikey'

const Series = () => {
  
  const horrorMovies = useMovieByCategory(27);
  return (
    <div>
      <h1 className="text-3xl text-orange-600">Popular series</h1>
      <GridContainer movies={horrorMovies} />
    </div>
  );
}

export default Series
