import { useLocation } from "react-router-dom";
import movies from "../data/movies";
import "./Discussions.css";

const dummyDiscussions = [
    {
        id: 1,
        movieId: 4,
        topic: "Ending explained (NO SPOILERS)",
        replies: 24
    },
    {
        id: 2,
        movieId: 5,
        topic: "Best scenes discussion",
        replies: 18
    },
    {
        id: 3,
        movieId: 1,
        topic: "Is the ending a dream?",
        replies: 42
    }
];

function Discussions() {
    const { search } = useLocation();
    const params = new URLSearchParams(search);
    const movieId = params.get("movie");

    const filteredDiscussions = movieId
        ? dummyDiscussions.filter(
            (d) => d.movieId === parseInt(movieId)
        )
        : dummyDiscussions;

    return (
        <div className="discussions">
            <h1 className="page-title">Discussions</h1>

            <div className="discussion-list">
                {filteredDiscussions.map((d) => {
                    const movie = movies.find((m) => m.id === d.movieId);

                    return (
                        <div key={d.id} className="discussion-card">
                            <img
                                src={movie.poster}
                                alt={movie.title}
                                className="discussion-poster"
                            />

                            <div className="discussion-info">
                                <h3>{d.topic}</h3>
                                <p>
                                    {movie.title} • {d.replies} replies
                                </p>
                            </div>
                        </div>
                    );
                })}

                {filteredDiscussions.length === 0 && (
                    <p style={{ color: "#aaa" }}>
                        No discussions for this movie yet.
                    </p>
                )}
            </div>
        </div>
    );
}

export default Discussions;
