import React from 'react';
import { NavLink } from 'react-router-dom';
const LINK_IMG = 'https://image.tmdb.org/t/p/w500/';
const CardGrid = ({ movie }) => {
  return (
    <div>
      <NavLink to={`/movie/${movie.id}`}>
        <img
          className="w-96 rounded-md p-1 hover:opacity-75"
          src={`${LINK_IMG}${movie.backdrop_path}`}
        />
      </NavLink>
      <p className="text-white font-bold text-xl">{movie.original_title}</p>
    </div>
  );
};

export default CardGrid;
