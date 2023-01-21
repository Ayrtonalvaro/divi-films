import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import useMovie from '../hooks/useMovie';

const LINK_IMG = 'https://image.tmdb.org/t/p/w500/';
const COMPANY_PATH = '';
const MovieDetail = () => {
  const { id } = useParams();
  const movie = useMovie(id);
  console.log(movie);

  return (
    <div className="mt-5">
      <div id="headear-movie-detail" className="flex justify-center">
        <img
          className="opacity-75  "
          src={`${LINK_IMG}${movie.backdrop_path}`}
        />
      </div>
      <h1 className="flex justify-start text-3xl mt-5 uppercase text-orange-500">
        {movie.original_title}
      </h1>
      <div className="grid grid-cols-2">
        <p className="w-96 mt-5 text-lg text-slate-300">{movie.overview}</p>
        <div>
          <h3 className="text-xl text-orange-500">
            <span className="text-slate-600">movie time</span> {movie.runtime}
            min
          </h3>
          <div className="flex items-center justify-start gap-10 mt-5">
            <h3 className="text-xl text-slate-600">Genres</h3>
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
            className="hover:text-orange-500 duration-100 "
            href={movie.homepage}
            target="_blank"
          >
            {movie.homepage}
          </a>
        </div>
      </div>

      <div className="flex items-center gap-10 mt-5 justify-center">
        {movie.production_companies?.map((company) => {
          return (
            <div key={company.id}>
              <img className="w-96" src={`${LINK_IMG}${company.logo_path}`} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MovieDetail;
