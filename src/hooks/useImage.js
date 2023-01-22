import { useEffect, useState } from 'react';
import { API_KEY } from '../utils/Apikey';

const useImage = (id) => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}images?api_key=${API_KEY}&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setImages(data));
  }, []);
  return images;
};

export default useImage;
