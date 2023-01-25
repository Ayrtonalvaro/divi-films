import React from 'react';
import { useState } from 'react';
import Carrousel from '../components/Carrousel';

import { API_KEY } from '../utils/Apikey';
import useMovies from '../hooks/useMovies';
import useMovieByCategory from '../hooks/useMovieByCategory';
import { NavLink } from 'react-router-dom';

const Home = () => {
  const URL_POPULAR = `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
  const movies = useMovies(URL_POPULAR);
  const adventure = useMovieByCategory(12);
  const action = useMovieByCategory(28);
  const horror = useMovieByCategory(27);
  const [loading, setLoading] = useState(true);

  if (!movies)
    return (
      <div>
        <p className="mt-[100px] flex  justify-center text-6xl">
          Loading films...
        </p>
      </div>
    );
  return (
    <div className="mt-5 scroll-smooth p-10">
      <h4 className="text-3xl font-black text-orange-600 ">Tendencias</h4>
      <NavLink to="/movies">
        <span className="mb-3 mt-3 hover:text-orange-600">Ver todas</span>
      </NavLink>
      <Carrousel movies={movies} />

      <h4 className="mt-5 text-2xl text-orange-600 ">Adventure</h4>
      <NavLink to={`/category/12`}>
        <span className="mb-3 mt-3 hover:text-orange-600">Ver todas</span>
      </NavLink>

      <Carrousel movies={adventure} />
      <h4 className="mt-5 text-2xl text-orange-600 ">Action</h4>
      <NavLink to="/category/28">
        <span className="mb-3 mt-3 hover:text-orange-600">Ver todas</span>
      </NavLink>

      <Carrousel movies={action} />
      <h4 className="mt-5 text-2xl text-orange-600 ">horror</h4>
      <NavLink to="category/27">
        <span className="mb-3 mt-3 hover:text-orange-600">Ver todas</span>
      </NavLink>
      <Carrousel movies={horror} />
    </div>
  );
};

export default Home;
