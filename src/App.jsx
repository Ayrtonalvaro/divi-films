import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
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
  const addFavs = (movieAdd) => {
    if (!isInFav(movieAdd.id)) {
      setMoviesFavs((prev) => {
        return [...prev, movieAdd];
      });
    }
  };

  const removeMovie = (id) => {
    setMoviesFavs(moviesFavs.filter((movie) => movie.id !== id));
  };

  const isInFav = (id) => {
    return moviesFavs.some((movie) => movie.id === id);
  };
  return (
    <AppContext.Provider value={{ addFavs, moviesFavs, removeMovie }}>
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
