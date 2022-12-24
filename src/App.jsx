import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import MovieDetail from './pages/MovieDetails';
import TvGrid from './components/TvGrid';
function App() {
  return (
    <div className="App">
      <nav className="flex  justify-between">
        <div>
          <Link to="/home">
            <p className="text-red-700 text-3xl">DiviFilms</p>
          </Link>
        </div>
        <div>
          <form>
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-200 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <input
                type="search"
                id="default-search"
                className="p-2 pl-5 ml-20 text-sm text-white border rounded-lg"
                placeholder="Search film"
              />
            </div>
          </form>
        </div>
        <ul className="flex gap-5">
          <li>
            <Link to="/home">
              <p>Cinema</p>
            </Link>
          </li>
          <li>
            <Link to="/tv">
              <p>Series</p>
            </Link>
          </li>
          <li>
            <Link to="/login">
              <button className="bg-red-700 rounded-xl w-20">
                <p>Login</p>
              </button>
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/tv" element={<TvGrid/>} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </div>
  );
}

export default App;
