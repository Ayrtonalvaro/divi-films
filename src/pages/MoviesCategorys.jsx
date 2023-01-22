import React from 'react';
import { useRef } from 'react';
import { useCallback } from 'react';
import { useMemo } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import GridContainer from '../components/GridContainer';
import Search from '../components/Search';
import useCategory from '../hooks/useCategory';

import useMovieByCategory from '../hooks/useMovieByCategory';

const MoviesCategorys = () => {
  const { idCategory } = useParams();
  const moviesCategory = useMovieByCategory(idCategory);
  const category = useCategory(idCategory);

  const [search, setSearch] = useState('');
  const searchInput = useRef(null);

  const handleSearch = useCallback(() => {
    setSearch(searchInput.current.value);
  }, []);

  const filteredCharacters = useMemo(
    () =>
      moviesCategory.filter((movie) => {
        return movie.original_title
          .toLowerCase()
          .includes(search.toLowerCase());
      }),
    [moviesCategory, search]
  );

  return (
    <div>
      <div className="mt-5 flex items-center justify-around">
        {category.map((category) => {
          return (
            <h1
              className="flex justify-center font-sans text-6xl uppercase text-orange-700"
              key={category.id}
            >
              {category.name}
            </h1>
          );
        })}

        <div className="flex items-center gap-5">
          
          <input
            ref={searchInput}
            className="rounded-xl border bg-slate-800 px-3 py-1 outline-none"
            placeholder="Search..."
            value={search}
            type="text"
            onChange={handleSearch}
            autoFocus
          />
        </div>
      </div>
      <GridContainer movies={filteredCharacters} />
    </div>
  );
};

export default MoviesCategorys;
