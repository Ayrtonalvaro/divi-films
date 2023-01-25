import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import AppContext from '../context/AppContex';

const ButtonAdd = ({ onAdd, onRemove }) => {
  const { buttonState } = useContext(AppContext);
  const [state, setState] = useState(true);

  const handleState = () => {
    if (state) {
      onAdd();
      setState(false);
    } else {
      onRemove()
      setState(true);
    }
  };

  return (
    <div
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
      {state && <i onClick={handleState} className="fa-solid fa-plus "></i>}
      {!state && <i onClick={handleState} className="fa-solid fa-x"></i>}
    </div>
  );
};

export default ButtonAdd;
