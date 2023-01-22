import React from 'react';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import AppContext from '../context/AppContex';
import ButtonAdd from './ButtonAdd';

const LINK_IMG = 'https://image.tmdb.org/t/p/w500/';

const CardCarrousel = ({ movie }) => {
  const { addFavs } = useContext(AppContext);

  const onAdd = () => {
    addFavs({ ...movie });
  };
  return (
    <>
      <div className="relative">
        <NavLink to={`/movie/${movie.id}`}>
          <img
            className=" mt-5 cursor-pointer  rounded-xl object-center  p-1 duration-300  hover:scale-105"
            src={`${LINK_IMG}${movie.poster_path}`}
          />
        </NavLink>
        <ButtonAdd onAdd={onAdd} />
      </div>
    </>
  );
};

export default CardCarrousel;
