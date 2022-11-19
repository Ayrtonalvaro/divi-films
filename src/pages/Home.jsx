import React from 'react';
import MoviesGrid from '../components/MoviesGrid';
import movies from '../movies.json';

const Home = () => {
  return (
    <div>
      <h1 className="text-red-400 text-7xl uppercase">Divi films</h1>
      <MoviesGrid movies={movies} />
    </div>
  );
};

export default Home;
