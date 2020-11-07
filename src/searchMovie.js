import {useState,useContext} from "react";
import './SearchMovie.css';
import MovieList from "./movieList";
import Loading from "./Loading";
import ResultContext from './RestContext';

function SearchMovie() {
   
    const [query,setQuery] = useState('');
    const [page,setPage] = useState(1);
    const [movies, setMovies] = useState([]);
    const [loading,setLoading] = useState(false);

    const {count,updateCount} = useContext(ResultContext);

    const searchMovies = async(e) => {
        e.preventDefault();
        setPage(1)
        movieSearching(query,page)
    }

    const next = () => {
        setPage(page+1)
        movieSearching(query,page)
    }

    const prev = () => {
        if (page > 1) {
            setPage(page-1)
            movieSearching(query,page)
        }
        
    }

    const movieSearching = async(q,p) => {

        setLoading(true);
        const url = `https://api.themoviedb.org/3/search/movie?api_key=a92f28e11a27e8e5938a2020be68ba9c&language=en-US&query=${q}&page=${p}&include_adult=false`;

        try {
            const res = await fetch(url);
            const data = await res.json();
            setMovies(data.results);
            setLoading(false);
            updateCount(data.total_results)
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
            <div className="showingPage">
                Current Page is {page}
            </div>
            <Loading isLoading={loading}></Loading>
            <MovieList movies={movies}></MovieList>
            <ul className="pagination">
                <li onClick={prev}><a href="#">Prev</a></li>
                <li onClick={next}><a href="#">Next</a></li>
            </ul>

        </div>
      

    );
    
}

export default SearchMovie;