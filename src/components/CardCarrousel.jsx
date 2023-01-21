import React from 'react'
import { NavLink } from 'react-router-dom';

const LINK_IMG = 'https://image.tmdb.org/t/p/w500/';

const CardCarrousel = ({movie}) => {
  return (
    <>
      <NavLink to={`/movie/${movie.id}`}>
        <img
          className=" mt-5 object-center rounded-md  hover:scale-105 duration-300  cursor-pointer"
          src={`${LINK_IMG}${movie.backdrop_path}`}
        />
      </NavLink>
    </>
  );
}

export default CardCarrousel
