import React from 'react';
import { useParams } from 'react-router-dom';

import Carrousel from '../components/Carrousel';

import useMovie from '../hooks/useMovie';
import useSimilarMovie from '../hooks/useSimilarMovie';
import useVideos from '../hooks/useVideos';

const LINK_IMG = 'https://image.tmdb.org/t/p/w500/';

const MovieDetail = () => {
  const { id } = useParams();
  const movie = useMovie(id);
  const similarMovies = useSimilarMovie(id);
  const videosMovieKey = useVideos(id);
  
  
  return (
    <div className="mt-5 h-screen p-10 ">
      <div id="headear-movie-detail" className="grid grid-cols-2 items-start ">
        <img
          className="h-full w-[600px] rounded-xl opacity-75"
          src={`${LINK_IMG}${movie.poster_path}`}
        />
        <div className="">
          <h1
            className="mt-5 flex justify-start text-7xl uppercase text-orange-500"
            id="title-movie-details"
          >
            {movie.original_title}
          </h1>

          <p className=" mt-5 text-lg text-slate-300">{movie.overview}</p>
          <div>
            <h3 className="mt-3 text-xl text-orange-500">
              <span className="uppercase text-slate-300 ">movie time</span>{' '}
              {movie.runtime}
              min
            </h3>
            <div className="mt-5 flex items-center justify-start gap-10">
              <h3 className="text-xl text-slate-400">Genres</h3>
              {movie.genres?.map((genre) => {
                return (
                  <div key={genre.id}>
                    <p>{genre.name}</p>
                  </div>
                );
              })}
            </div>
            <p className="py-5 text-slate-400">
              Release date {movie.release_date}
            </p>
            <a
              className="text-orange-200 duration-100 hover:text-orange-500 "
              href={movie.homepage}
              target="_blank"
            >
              {movie.homepage}
            </a>
          </div>
          <div className="mt-10 grid grid-cols-2">
            {movie.production_companies?.map((company) => {
              return (
                <div key={company.id}>
                  <img
                    className="w-96"
                    src={`${LINK_IMG}${company.logo_path}`}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <button>Ver trailer</button>
      
      <h2 className="mt-5 text-5xl text-orange-200">Similar movies</h2>
      <Carrousel movies={similarMovies} />
    </div>
  );
};

export default MovieDetail;
