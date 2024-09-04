import { useState } from "react";
import MovieList from './components/Film-List/film-list-components';
import SearchBox from './components/Search-Box/search-box-component';
import './index.css';

function App() {
  const [filteredMovies, setFilteredMovies] = useState([]);

  return (
    <div>
        <SearchBox setFilteredMovies={setFilteredMovies} />
        <MovieList filteredMovies={filteredMovies} />
    </div>
  );
}

export default App;
