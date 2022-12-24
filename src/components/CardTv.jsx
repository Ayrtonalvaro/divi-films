import React from 'react';

const CardTv = ({serie}) => {

  const imgUrl = 'https://image.tmdb.org/t/p/w300';
  return (
    <div>
      <img
        className="rounded hover:opacity-50"
        src={imgUrl + serie.poster_path}
        alt={serie.name}
      />
      <p className="text-xl mt-5">{serie.name}</p>
      <span className="text-yellow-300">
        <p className="font-semibold">({serie.first_air_date})</p>
      </span>
      <div className="flex justify-center gap-4">
        <i className="fa-solid fa-star text-yellow-300"></i>
        <p className="text-red-700">{serie.vote_average}</p>
      </div>
    </div>
  );
};

export default CardTv;
