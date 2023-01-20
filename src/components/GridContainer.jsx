import React from 'react';
import CardGrid from './CardGrid';

const GridContainer = ({ movies }) => {
  return (
    <>
      <div className='grid grid-cols-4'>
        {movies.map((movie) => {
          return (
            <div key={movie.id}>
              <CardGrid movie={movie} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default GridContainer;
