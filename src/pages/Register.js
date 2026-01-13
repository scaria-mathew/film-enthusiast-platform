import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";

function Register({ setIsLoggedIn, setUser }) {
    const navigate = useNavigate();

    const handleRegister = () => {
        setIsLoggedIn(true);
        setUser({ username: "scaria" });
        navigate("/");
    };

    return (
        <div className="auth-container">
            <div className="auth-box">
                <h1 className="auth-title">Register</h1>

                <form className="auth-form">
                    <input type="text" placeholder="Username" className="auth-input" />
                    <input type="email" placeholder="Email" className="auth-input" />
                    <input type="password" placeholder="Password" className="auth-input" />
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        className="auth-input"
                    />

                    <button
                        type="button"
                        className="auth-button"
                        onClick={handleRegister}
                    >
                        Create Account
                    </button>
                </form>

                <p className="auth-footer">
                    Already have an account? <Link to="/login">Login</Link>
                </p>
            </div>
        </div>
    );
}

export default Register;
