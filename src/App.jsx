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
  const [moviesFavs, setMoviesFavs] = useState([]);
  const [buttonState, setButtonState] = useState(true)

  const addFavs = (movieAdd) => {
    if (!isInFav(movieAdd.id)) {
      setMoviesFavs((prev) => {
        return [...prev, movieAdd];
      });
      setButtonState(false)
    } else {
      alert('Ya esta en favs');
    }
  };

  const isInFav = (id) => {
    return moviesFavs.some((movie) => movie.id === id);
  };
  return (
    <AppContext.Provider value={{ addFavs,moviesFavs,buttonState }}>
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
