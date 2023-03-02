import './App.css';
import { useEffect, useState } from 'react';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';


// 63a29948
const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=63a29948';

// const movie1 = {
//   Poster: "https://m.media-amazon.com/images/M/MV5BYjFhN2RjZTctMzA2Ni00NzE2LWJmYjMtNDAyYTllOTkyMmY3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg",
//   Title:"Italian Spiderman",
//   Type:"movie",
//   Year:"2007",
//   imdbID:"tt2705436"
// };

const App = () => {
  
  const [movies, setMovies] = useState([]); // State for movies is defined using useState() hook. The default value of the state is an empty array.
  const [searchTerm, setSearchTerm] = useState(''); // Stete for searchTerm is defined using useState() hook.

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    // console.log(data.Search);
    setMovies(data.Search);
  }

  useEffect(() => {
    searchMovies('Spiderman');
  }, []);

  return (
    <div className="app">
      <h1>Movies World</h1>

      <div className="search">
        <input placeholder='Search for Movies' value={searchTerm}
        onChange={(e) => {setSearchTerm(e.target.value)}}
        />
        <img src={SearchIcon} alt="search" onClick={() => {searchMovies(searchTerm)}}
        />
      </div>
      {
        movies?.length > 0 ?
        (
          <div className='container'>
            {movies.map((movie) => (
              // Each child in a list should have a unique "key" prop
              <MovieCard movie={movie} key={movie.imdbID}/>
            ))}                     
          </div>
        ) :
        (
          <div className='empty'>
            <h2>No movies found.</h2>  
          </div>
        )
      }


      
      
    </div>
  );
}

export default App;
