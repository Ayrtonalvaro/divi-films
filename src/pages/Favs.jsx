import React from 'react';
import { useContext } from 'react';
import AppContext from '../context/AppContex';
import GridContainer from '../components/GridContainer';
const Favs = () => {
  const { moviesFavs } = useContext(AppContext);
  console.log(moviesFavs)

  if(moviesFavs.length === 0){
    return (
      <div>
        <h1 className="flex justify-center text-6xl font-sans text-orange-700 uppercase">
          favs
        </h1>
        <p className='flex justify-center mt-5 text-xl text-slate-400'>No hay peliculas en la lista</p>
      </div>
    );
  }
  return (
    <div>
      <h1 className="flex justify-center text-6xl font-sans text-orange-700 uppercase">
        favs
      </h1>
      <GridContainer  movies = {moviesFavs}/>
    </div>
  );
};

export default Favs;
