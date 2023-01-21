import React from 'react'
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import AppContext from '../context/AppContex';

const LINK_IMG = 'https://image.tmdb.org/t/p/w500/';

const CardCarrousel = ({movie}) => {

  const { addFavs } = useContext(AppContext)

  const onAdd = () =>{
    addFavs({...movie})
  }
  return (
    <>
      <div className="relative">
        <NavLink to={`/movie/${movie.id}`}>
          <img
            className=" mt-5 p-1  object-center rounded-xl  hover:scale-105 duration-300  cursor-pointer"
            src={`${LINK_IMG}${movie.poster_path}`}
          />
        </NavLink>
        <div
          onClick={onAdd}
          className="cursor-pointer bg-orange-500 opacity-50 hover:opacity-80 hover:scale-110 hover:text-slate-100 transition ease-in-out delay-150 rounded-full h-8 w-8 absolute top-2 right-4 flex items-center justify-center "
        >
          <i className="fa-solid fa-plus "></i>
        </div>
      </div>
    </>
  );
}

export default CardCarrousel
