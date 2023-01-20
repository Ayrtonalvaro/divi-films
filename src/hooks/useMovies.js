import { useEffect, useState } from 'react';
import { get } from '../utils/httpClient';

const useMovies = (url) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    get(url).then((data) => {
      setMovies(data.results);
    });
  }, [url]);

  return movies;
};

export default useMovies;
