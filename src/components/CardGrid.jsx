import React from 'react';
import { NavLink } from 'react-router-dom';
const LINK_IMG = 'https://image.tmdb.org/t/p/w500/';
const CardGrid = ({ movie }) => {
  return (
    <div>
      <NavLink to={`/movie/${movie.id}`}>
        <img
          className=" w-full p-10 rounded-md hover:opacity-75"
          src={`${LINK_IMG}${movie.poster_path}`}
        />
      </NavLink>
      <p className="text-white font-black text-xl flex justify-center ">{movie.original_title}</p>
    </div>
  );
};

export default CardGrid;
