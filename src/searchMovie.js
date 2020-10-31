import {useState} from "react";
import './SearchMovie.css';
import MovieList from "./movieList";
import Loading from "./Loading";

function SearchMovie() {
   
    const [query,setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const [loading,setLoading] = useState(false);

    const searchMovies = async(e) => {
        e.preventDefault();
        console.log("submitting");
        setLoading(true);
        const url = `https://api.themoviedb.org/3/search/movie?api_key=a92f28e11a27e8e5938a2020be68ba9c&language=en-US&query=${query}&page=1&include_adult=false`;

        try {
            const res = await fetch(url);
            const data = await res.json();
            setMovies(data.results);
            setLoading(false);
        } catch (err) {
            console.error(err);
        }
        
    }

    return (
        <div>
            
            <form className="form" onSubmit={searchMovies}>
                <label className="label" htmlFor="query">Movie Name</label>
                <input className="input" type="text" name="query"
                    value={query} onChange={(e) => setQuery(e.target.value) }
                    placeholder="i.e. Jurassic Park"/>
                <button className="button" type="submit">Search</button>
            </form>
            <Loading isLoading={loading}></Loading>
            <MovieList movies={movies}></MovieList>

        </div>
      

    );
    
}

export default SearchMovie;