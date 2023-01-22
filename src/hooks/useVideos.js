import { useEffect, useState } from 'react';
import { API_KEY } from '../utils/Apikey';

const useVideos = (id) => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setVideos(data.results[0].key));
  }, []);
  return videos;
};

export default useVideos;
