import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ movie }) => {
  const imgUrl = 'https://image.tmdb.org/t/p/w300';

  return (
    <div>
      <Link to={'/movie/' + movie.id}>
        <img
          className="rounded hover:opacity-50"
          src={imgUrl + movie.poster_path}
          alt={movie.title}
        />
      </Link>
      <p className="text-xl mt-5">{movie.title}</p>
      <span className="text-yellow-300">
        <p className="font-semibold">({movie.release_date})</p>
      </span>
      <div className="flex justify-center gap-4">
        <i className="fa-solid fa-star text-yellow-300"></i>
        <p className="text-red-700">{movie.vote_average}</p>
      </div>
    </div>
  );
};

export default Card;
