import React from 'react';
import CardGrid from './CardGrid';

const GridContainer = ({ movies, movieFilter }) => {
  return (
    <>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 auto-cols-auto items-center p-10 ">
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
