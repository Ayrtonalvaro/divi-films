import React from 'react';
import { useContext } from 'react';
import AppContext from '../context/AppContex';

const ButtonAdd = ({ onAdd }) => {
  const { buttonState } = useContext(AppContext);

  return (
    <div
      onClick={onAdd}
      className="absolute 
        top-2  
        flex 
        h-8 
        w-8 
        cursor-pointer
        items-center 
        justify-center 
        rounded-full 
        bg-orange-500 
        opacity-50 
        transition delay-150 
        ease-in-out 
        hover:scale-110 
        hover:text-slate-100 
        hover:opacity-80 
        sm:right-5 
        sm:top-4 
        md:right-5 
        md:top-4 "
    >
      <i className="fa-solid fa-plus "></i>
    </div>
  );
};

export default ButtonAdd;
