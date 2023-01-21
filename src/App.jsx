import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';

import Favs from './pages/Favs';
import Films from './pages/Films';
import Home from './pages/Home';
import Populars from './pages/Populars';
import Series from './pages/Series';
import MoviesCategory from './pages/MoviesCategorys';
import MovieDetail from './pages/MovieDetails';

function App() {
  return (
    <div className="App container mx-auto ">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/movies" element={<Films films={''} />} />
          <Route exact path="/series" element={<Series />} />
          <Route exact path="/populars" element={<Populars />} />
          <Route exact path="/favs" element={<Favs />} />
          <Route
            exact
            path="/category/:nameCategory"
            element={<MoviesCategory />}
          />
          <Route exact path='/movie/:id' element={<MovieDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
