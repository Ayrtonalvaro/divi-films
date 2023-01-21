import React from 'react';
import { useParams } from 'react-router-dom';

import Carrousel from '../components/Carrousel';

import useMovie from '../hooks/useMovie';
import useSimilarMovie from '../hooks/useSimilarMovie';

const LINK_IMG = 'https://image.tmdb.org/t/p/w500/';

const MovieDetail = () => {
  const { id } = useParams();
  const movie = useMovie(id);
  const similarMovies = useSimilarMovie(id);

  return (
    <div className="mt-5 h-screen ">
      <div id="headear-movie-detail" className="grid grid-cols-2 items-start ">
        <img
          className="opacity-75 rounded-xl w-[600px] h-full"
          src={`${LINK_IMG}${movie.poster_path}`}
        />
        <div className="">
          <h1
            className="flex justify-start text-7xl mt-5 uppercase text-orange-500"
            id="title-movie-details"
          >
            {movie.original_title}
          </h1>

          <p className=" mt-5 text-lg text-slate-300">{movie.overview}</p>
          <div>
            <h3 className="text-xl text-orange-500 mt-3">
              <span className="text-slate-300 uppercase ">movie time</span>{' '}
              {movie.runtime}
              min
            </h3>
            <div className="flex items-center justify-start gap-10 mt-5">
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
              className="hover:text-orange-500 text-orange-200 duration-100 "
              href={movie.homepage}
              target="_blank"
            >
              {movie.homepage}
            </a>
          </div>
          <div className="grid grid-cols-2 mt-10">
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
      <h2 className="mt-5 text-5xl text-orange-200">Similar movies</h2>
      <Carrousel movies={similarMovies} />
    </div>
  );
};

export default MovieDetail;
