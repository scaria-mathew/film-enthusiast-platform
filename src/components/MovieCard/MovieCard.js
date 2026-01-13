import { Link } from "react-router-dom";
import "./MovieCard.css";

function MovieCard({ movie }) {
    return (
        <Link to={`/movies/${movie.id}`} className="movie-card">
            <div className="poster-wrapper">
                <img
                    src={movie.poster}
                    alt={movie.title}
                    className="movie-poster"
                />
            </div>

            <div className="movie-info">
                <p className="card-title">{movie.title}</p>
                <span className="movie-year">{movie.year}</span>
            </div>
        </Link>
    );
}

export default MovieCard;
