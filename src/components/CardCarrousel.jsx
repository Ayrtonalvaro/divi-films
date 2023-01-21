import React from 'react'
import { NavLink } from 'react-router-dom';

const LINK_IMG = 'https://image.tmdb.org/t/p/w500/';

const CardCarrousel = ({movie}) => {
  return (
    <>
      <NavLink to={`/movie/${movie.id}`}>
        <img
          className=" mt-5 p-1  object-center rounded-xl  hover:scale-105 duration-300  cursor-pointer"
          src={`${LINK_IMG}${movie.poster_path}`}
        />
      </NavLink>
    </>
  );
}

export default CardCarrousel
