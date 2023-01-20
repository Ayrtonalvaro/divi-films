import React from 'react';
import { useParams } from 'react-router-dom';
import useMovie from '../hooks/useMovie';

const MovieDetail = () => {
  const { id } = useParams();

  const movie = useMovie(id);

  return <div className="mt-5">{movie.id}</div>;
};

export default MovieDetail;
