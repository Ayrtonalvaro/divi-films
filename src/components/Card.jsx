import React from 'react'
import { Link } from 'react-router-dom';

const Card = ({movie}) => {

  const imgUrl = 'https://image.tmdb.org/t/p/w300';

  return (
    <div>
      <Link to={'/movies/' + movie.id}>
        <img
          className="rounded hover:opacity-50"
          src={imgUrl + movie.poster_path}
          alt={movie.title}
        />
      </Link>
      <p className="text-xl">{movie.title}</p>
    </div>
  );
}

export default Card
