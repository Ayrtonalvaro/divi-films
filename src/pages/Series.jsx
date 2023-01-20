import React from 'react'
import GridContainer from '../components/GridContainer'
import useMovies from '../hooks/useMovies'
import { API_KEY } from '../utils/Apikey'

const Series = () => {
  
  const URL_SERIES = `/tv/popular?api_key=${API_KEY}&language=en-US&page=1`;
  const series = useMovies(URL_SERIES);
  return (
    <div>
      <h1 className="text-3xl text-orange-600">Popular series</h1>
      <GridContainer movies={series} />
    </div>
  );
}

export default Series
