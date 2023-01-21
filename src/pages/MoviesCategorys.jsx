import React from 'react'
import { useParams } from 'react-router-dom'
import GridContainer from '../components/GridContainer'
import useMovieByCategory from '../hooks/useMovieByCategory'

const MoviesCategorys = () => {
  
  const { idCategory } = useParams()
  const moviesCategory = useMovieByCategory(idCategory)
  console.log(moviesCategory)
  return (
    <div>
      <GridContainer movies = {moviesCategory} />
    </div>
  )
}

export default MoviesCategorys
