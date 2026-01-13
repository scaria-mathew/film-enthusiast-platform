import "./AdminDashboard.css";

function AdminDashboard() {
    return (
        <div className="admin">
            <h1 className="admin-title">Admin Dashboard</h1>

            {/* Stats */}
            <div className="admin-stats">
                <div className="stat-card">
                    <h2>Users</h2>
                    <p>128</p>
                </div>
                <div className="stat-card">
                    <h2>Movies</h2>
                    <p>56</p>
                </div>
                <div className="stat-card">
                    <h2>Reviews</h2>
                    <p>342</p>
                </div>
                <div className="stat-card">
                    <h2>Discussions</h2>
                    <p>89</p>
                </div>
            </div>

            {/* Moderation */}
            <div className="admin-section">
                <h2>Pending Reviews</h2>

                <div className="admin-item">
                    <p>
                        <strong>Inception</strong> — Review by <em>user123</em>
                    </p>
                    <div className="admin-actions">
                        <button className="approve">Approve</button>
                        <button className="reject">Reject</button>
                    </div>
                </div>

                <div className="admin-item">
                    <p>
                        <strong>Dune: Part Two</strong> — Review by <em>filmnerd</em>
                    </p>
                    <div className="admin-actions">
                        <button className="approve">Approve</button>
                        <button className="reject">Reject</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminDashboard;
