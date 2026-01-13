import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import movies from "../data/movies";
import "./MovieDetails.css";

// OTT Icons
import netflix from "../assets/netflix-logo.png";
import prime from "../assets/prime-video-logo.png";

// Map OTT keys to icons
const ottIcons = {
    netflix: netflix,
    prime: prime
};

function MovieDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [showLoginMsg, setShowLoginMsg] = useState(false);

    const movie = movies.find((m) => m.id === parseInt(id));

    if (!movie) {
        return <h2 style={{ padding: "20px" }}>Movie not found</h2>;
    }

    const restrictedAction = () => {
        setShowLoginMsg(true);
        setTimeout(() => setShowLoginMsg(false), 2000);
    };

    return (
        <div className="movie-details">
            {/* Hero Section */}
            <div
                className="movie-hero"
                style={{ backgroundImage: `url(${movie.backdrop})` }}
            >
                <div className="hero-overlay">
                    <h1 className="movie-title">{movie.title}</h1>
                    <p className="movie-meta">
                        {movie.year} • {movie.genres.join(", ")}
                    </p>
                </div>
            </div>

            {/* OTT Section */}
            <div className="movie-content">
                <h2>Available On</h2>

                <div className="ott-list">
                    {movie.ott.map((platform, index) =>
                        ottIcons[platform] ? (
                            <img
                                key={index}
                                src={ottIcons[platform]}
                                alt={platform}
                                title={platform.charAt(0).toUpperCase() + platform.slice(1)}
                                className="ott-icon"
                            />
                        ) : null
                    )}
                </div>
            </div>

            {/* Reviews Section */}
            <div className="reviews-section">
                <h2>Reviews</h2>

                <div className="review-card">
                    <div className="review-header">
                        <div>
                            <span className="review-user">scaria</span>
                            <div className="review-stars">⭐⭐⭐⭐⭐</div>
                        </div>
                        <span className="review-tag non-spoiler">Non-Spoiler</span>
                    </div>

                    <p className="review-text">
                        Visually stunning and emotionally powerful. Denis Villeneuve delivers
                        again with scale and depth.
                    </p>

                    <div className="review-actions">
                        <button onClick={restrictedAction}>👍 12</button>
                        <button onClick={restrictedAction}>👎 1</button>
                    </div>
                </div>

                <div className="review-card spoiler">
                    <div className="review-header">
                        <div>
                            <span className="review-user">filmnerd99</span>
                            <div className="review-stars">⭐⭐⭐⭐</div>
                        </div>
                        <span className="review-tag spoiler-tag">Spoiler</span>
                    </div>

                    <p className="review-text">
                        Paul embracing his destiny and the final confrontation completely
                        changes the power balance.
                    </p>

                    <div className="review-actions">
                        <button onClick={restrictedAction}>👍 8</button>
                        <button onClick={restrictedAction}>👎 0</button>
                    </div>
                </div>

                {showLoginMsg && (
                    <p className="login-warning">
                        You need to login to participate.
                    </p>
                )}

                {/* Redirect to Discussions */}
                <button
                    className="discussion-link-btn"
                    onClick={() => navigate(`/discussions?movie=${movie.id}`)}
                >
                    View Discussions
                </button>
            </div>
        </div>
    );
}

export default MovieDetails;
