import movies from "../data/movies";
import MovieCard from "../components/MovieCard/MovieCard";
import NewReleases from "../components/NewReleases/NewReleases";
import "./Home.css";

function Home() {
    return (
        <div className="home">
            {/* New Releases Section */}
            <NewReleases />

            {/* Trending Movies Section */}
            <h1 className="home-title">Trending Movies</h1>

            <div className="movie-grid">
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
}

export default Home;
