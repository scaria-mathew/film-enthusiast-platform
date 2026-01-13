import { Link } from "react-router-dom";
import movies from "../../data/movies";
import "./NewReleases.css";

function NewReleases() {
    const newMovies = movies.filter((movie) => movie.isNew);

    return (
        <div className="new-releases">
            <h2 className="section-title">New Releases</h2>

            <div className="slider">
                {newMovies.map((movie) => (
                    <Link
                        key={movie.id}
                        to={`/movies/${movie.id}`}
                        className="slide"
                        style={{
                            backgroundImage: `url(${movie.backdrop})`
                        }}
                    >
                        <div className="slide-overlay">
                            <h3>{movie.title}</h3>
                            <span>{movie.year}</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default NewReleases;
