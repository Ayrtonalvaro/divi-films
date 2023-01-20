import { useEffect, useState } from 'react';
import { API_KEY } from '../utils/Apikey';
import { get } from '../utils/httpClient';

const useGenre = () => {
  const API_URL = `/genre/movie/list?api_key=${API_KEY}&language=en-US`;
  const [genre, setGenre] = useState([]);
  useEffect(() => {
    get(API_KEY)
      .then((data) => {
        console.log(data.genre)
      })
  },[]);
};
