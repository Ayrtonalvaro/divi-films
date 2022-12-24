import React, { useEffect, useState } from 'react'
import { get } from '../utils/httpClient'
import CardTv from './CardTv'
import Selector from './Selector';

const TvGrid = () => {

  const[series, setTvSeries] = useState([]);
  const [loading, setLoading] = useState([])
  
  useEffect (()=>{
    get('/tv/popular').then((data) => {
      setTvSeries(data.results);
    });
  },[])

  console.log(series)
  return (
    <div className="mt-5">
      <h1 className="text-red-800 text-7xl uppercase ">Series</h1>
      <main className="mt-10">
        <ul className="grid grid-cols-5 gap-4">
          {series.map((serie) => {
            return (
              <div key={serie.id}>
                <ul>
                  <li>
                    <CardTv serie={serie} />
                  </li>
                </ul>
              </div>
            );

            
          })}
        </ul>
      </main>
    </div>
  );
}

export default TvGrid
