import React from 'react'
import GridContainer from '../components/GridContainer';
import useMovieByCategory from '../hooks/useMovieByCategory';

const Populars = () => {

  const documentary = useMovieByCategory(99);

  return (
    <div>
      <h1 className="text-3xl text-orange-600">Documentary</h1>
      <GridContainer movies={documentary}/>
    </div>
  );
}

export default Populars
