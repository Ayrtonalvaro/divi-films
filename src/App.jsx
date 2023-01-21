import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';

import Favs from './pages/Favs';
import Films from './pages/Films';
import Home from './pages/Home';

import MoviesCategory from './pages/MoviesCategorys';
import MovieDetail from './pages/MovieDetails';
import AppContext from './context/AppContex';
import { useState } from 'react';

function App() {
  const [moviesFavs, setMoviesFavs] = useState ([]);

  const addFavs = (movieAdd) => {
    setMoviesFavs(prev => {
      return[...prev,movieAdd]
    })
  };
  console.log(moviesFavs)

  const isInFav = (id) => (moviesFav => id === moviesFav.id)
  return (
    <AppContext.Provider value={ {addFavs} }>
      <BrowserRouter>
        <Navbar />
        <div className="App ">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/movies" element={<Films films={''} />} />

            <Route exact path="/favs" element={<Favs />} />
            <Route
              exact
              path="/category/:idCategory"
              element={<MoviesCategory />}
            />
            <Route exact path="/movie/:id" element={<MovieDetail />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
