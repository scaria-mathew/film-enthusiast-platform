import movies from "../data/movies";
import MovieCard from "../components/MovieCard/MovieCard";
import "./Movies.css";

function Movies() {
    return (
        <div className="movies">
            <h1 className="page-title">All Movies</h1>

            <div className="movie-grid">
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
}

export default Movies;
