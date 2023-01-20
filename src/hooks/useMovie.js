import { useEffect, useState } from 'react';
import { API_KEY } from '../utils/Apikey';

const useMovie = (id) => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setMovie(data));
  }, []);
  return movie;
};

export default useMovie;
