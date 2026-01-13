import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";

function Login({ setIsLoggedIn, setUser }) {
    const navigate = useNavigate();

    const handleLogin = () => {
        setIsLoggedIn(true);
        setUser({ username: "scaria" });
        navigate("/");
    };

    return (
        <div className="auth-container">
            <div className="auth-box">
                <h1 className="auth-title">Login</h1>

                <form className="auth-form">
                    <input
                        type="text"
                        placeholder="Email or Username"
                        className="auth-input"
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        className="auth-input"
                    />

                    <button
                        type="button"
                        className="auth-button"
                        onClick={handleLogin}
                    >
                        Login
                    </button>
                </form>

                <p className="auth-footer">
                    Don’t have an account? <Link to="/register">Register</Link>
                </p>
            </div>
        </div>
    );
}

export default Login;
