import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { get } from '../utils/httpClient';
const MovieDetail = () => {

  const { id } = useParams();
  console.log(id)
  
  const [movie, setMovie] = useState(null)
  useEffect(() => {
    get("/movie/" + id).then((data) => {
      setMovie(data)
    })
  },[id])

  console.log(movie)
  if(!movie){
    return null
  }
  const imgUrl = 'https://image.tmdb.org/t/p/w300' + movie.poster_path;
  return (
    <div className='mt-5'>
      <p className="text-red-800 uppercase text-7xl ">Movie details</p>
      <div className="grid grid-cols-2 mt-20 ">
        <div className='mx-auto'>
          <img className="w-96  " src={imgUrl} alt={movie.title} />
        </div>
        <div className="flex  flex-col space-y-5 my-auto mx-0 ">
          <p className="text-3xl text-yellow-500 ">Title:{movie.title}</p>
          <p className='text-2xl '>
            Genrs:
            {movie.genres.map((genre) => genre.name).join(', ')}
          </p>
          <p className='text-slate-400'>Description: {movie.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
