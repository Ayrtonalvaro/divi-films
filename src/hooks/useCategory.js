import { useEffect, useState } from "react";
import { API_KEY } from "../utils/Apikey";

const useCategory = (id) => {
  const [categorys, setCategorys] = useState([])
  
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setCategorys(data.genres));
  }, []);
  const category = categorys.filter((category) => {
    return category.id === parseInt(id);
  });
  return category
}

export default useCategory