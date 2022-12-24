import React from 'react';

import Card from './CardMovie';
const MoviesGrid = ({ movies }) => {
  return (
    <div>
      <main className="mt-10">
        <ul className="grid grid-cols-5 gap-4">
          {movies.map((movie) => (
            <div key={movie.id}>
              <li className="">
                <Card movie={movie} />
              </li>
            </div>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default MoviesGrid;
