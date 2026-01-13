import "./Profile.css";

function Profile() {
    return (
        <div className="profile">
            {/* Header */}
            <div className="profile-header">
                <div className="profile-avatar">S</div>

                <div className="profile-info">
                    <h1>scaria</h1>
                    <p>Film enthusiast • Sci-Fi lover</p>
                </div>
            </div>

            {/* Stats */}
            <div className="profile-stats">
                <div>
                    <strong>12</strong>
                    <span>Reviews</span>
                </div>
                <div>
                    <strong>48</strong>
                    <span>Likes</span>
                </div>
                <div>
                    <strong>6</strong>
                    <span>Fan Art</span>
                </div>
            </div>

            {/* Activity */}
            <div className="profile-section">
                <h2>Recent Reviews</h2>

                <div className="profile-review">
                    <h3>Dune: Part Two</h3>
                    <p>⭐⭐⭐⭐⭐ Visually breathtaking and intense.</p>
                </div>

                <div className="profile-review">
                    <h3>Oppenheimer</h3>
                    <p>⭐⭐⭐⭐ A powerful character-driven story.</p>
                </div>
            </div>
        </div>
    );
}

export default Profile;
