import { useEffect, useState } from 'react';
import { API_KEY } from '../utils/Apikey';

const useSimilarMovie = (id) => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${API_KEY}&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setMovie(data.results));
  }, [id]);
  return movie;
};

export default useSimilarMovie;
