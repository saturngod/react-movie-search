import './movieList.css';
import MovieCard from './moviecard'
function MovieList(props) {
    return (
        <div className="card-list">
             {props.movies.filter(movie => movie.poster_path).map(movie =>(
                 <MovieCard key={movie.id} movie={movie}></MovieCard>
             ))}
        </div>
    );
}

export default MovieList;
