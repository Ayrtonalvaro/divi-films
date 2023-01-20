import { useEffect, useState } from "react";
import { API_KEY } from "../utils/Apikey";

 const useMovieByCategory = (id) => {
  const [movieByCategory, setMovieByCategory] = useState([])
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${id}`
    )
      .then((res) => res.json())
      .then((data) => setMovieByCategory(data.results));
  }, []);
  return movieByCategory;
}

export default useMovieByCategory