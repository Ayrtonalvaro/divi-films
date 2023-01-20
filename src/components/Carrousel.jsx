import React from 'react'
import CardCarrousel from './CardCarrousel'

const Carrousel = ({movies}) => {
  return (
    <div>
      <div className=" overflow-x-scroll flex gap-5  ">
        {movies.map((movie) => (
          <CardCarrousel key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Carrousel
