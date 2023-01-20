import React from 'react'
import { NavLink } from 'react-router-dom';

const LINK_IMG = 'https://image.tmdb.org/t/p/w500/';

const CardCarrousel = ({movie}) => {
  return (
    <>
      <img
        className="w-64 rounded-md"
        src={`${LINK_IMG}${movie.backdrop_path}`}
      />
    </>
  );
}

export default CardCarrousel
