import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar({ isLoggedIn, user, setIsLoggedIn, setUser }) {
    const navigate = useNavigate();

    const handleLogout = () => {
        setIsLoggedIn(false);
        setUser(null);
        navigate("/");
    };

    return (
        <nav className="navbar">
            {/* Left */}
            <div className="navbar-left">
                <Link to="/" className="logo">
                    <img src="../logo-1.png" className="logo-img" />
                </Link>

                <Link to="/movies" className="nav-link">Movies</Link>
                <Link to="/discussions" className="nav-link">Discussions</Link>
                <Link to="/fanart" className="nav-link">Fan Art</Link>
            </div>

            {/* Center */}
            <div className="navbar-center">
                <input
                    type="text"
                    placeholder="Search movies"
                    className="search-input"
                />
            </div>

            {/* Right */}
            <div className="navbar-right">
                {!isLoggedIn ? (
                    <>
                        <Link to="/login" className="nav-link">Login</Link>
                        <Link to="/register" className="nav-link register-btn">
                            Register
                        </Link>
                    </>
                ) : (
                    <div className="avatar-wrapper">
                        <div className="avatar">
                            {user?.username[0].toUpperCase()}
                        </div>

                        <div className="avatar-dropdown">
                            <button onClick={() => navigate("/profile")}>
                                Profile
                            </button>
                            <button onClick={handleLogout}>
                                Logout
                            </button>
                        </div>
                    </div>

                )}
            </div>
        </nav>
    );
}

export default Navbar;
