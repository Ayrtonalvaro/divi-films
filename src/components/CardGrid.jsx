import React from 'react';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import AppContext from '../context/AppContex';
import ButtonAdd from './ButtonAdd';
const LINK_IMG = 'https://image.tmdb.org/t/p/w500/';
const CardGrid = ({ movie }) => {

  const { addFavs, removeFavs } = useContext(AppContext);

  const onAdd = () => {
    addFavs({...movie})
  }

  const onRemove = () => {
    removeFavs(movie.id)
  }

  return (
    <div className="relative">
      <NavLink to={`/movie/${movie.id}`}>
        <img
          className=" w-full rounded-md p-10 hover:opacity-75"
          src={`${LINK_IMG}${movie.poster_path}`}
        />
      </NavLink>
      <ButtonAdd onAdd={onAdd} removeFavs={onRemove} />
      <p className="flex justify-center text-xl font-black text-white ">
        {movie.original_title}
      </p>
    </div>
  );
};

export default CardGrid;
