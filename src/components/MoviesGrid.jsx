import React from 'react';

import Card from './Card';

const MoviesGrid = ({ movies }) => {
  return (
    <div>
      <main className="mt-10">
        <ul className="grid grid-cols-5 gap-4">
          {movies.map((movie) => (
            <div>
              <li className="" key={movie.id}>
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
