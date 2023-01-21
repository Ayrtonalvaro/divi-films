import React from 'react';
import { useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import GridContainer from '../components/GridContainer';
import useCategory from '../hooks/useCategory';
import useMovieByCategory from '../hooks/useMovieByCategory';

const MoviesCategorys = () => {
  const { idCategory } = useParams();
  const moviesCategory = useMovieByCategory(idCategory);

  const category = useCategory(idCategory);

  const [search, setSearch] = useState('');

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div>
      <div className="flex justify-around mt-5 items-center">
        {category.map((category) => {
          return (
            <h1
              className="flex justify-center text-6xl font-sans text-orange-700 uppercase"
              key={category.id}
            >
              {category.name}
            </h1>
          );
        })}

        <form className='flex gap-5 items-center'>
          <i className="fa-solid fa-magnifying-glass  rounded-full  flex items-center justify-center"></i>
          <input
            className="bg-slate-800 outline-none border rounded-xl px-3 py-1"
            placeholder="Search..."
            value={search}
            onChange={handleChange}
            autoFocus
          />
        </form>
      </div>
      <GridContainer movies={moviesCategory} movieFilter={''} />
    </div>
  );
};

export default MoviesCategorys;
