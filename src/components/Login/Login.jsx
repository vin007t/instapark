import React, { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import "./Login.css";

function Login() {
  const [isLogin, setIsLogin] = useState(false);
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const [loginData, setLoginData] = useState({ username: "", password: "" });

  // Handle input change
  const handleChange = (e, isLoginForm = false) => {
    const { name, value } = e.target;
    if (isLoginForm) {
      setLoginData((prev) => ({ ...prev, [name]: value }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Registration Validation & Submission
  const handleRegister = (e) => {
    e.preventDefault();
    const { username, email, password } = formData;

    if (!username || !email || !password) {
      alert("All fields are required!");
      return;
    }

    if (!/^[a-zA-Z0-9_]{3,15}$/.test(username)) {
      alert("Username should be 3-15 characters and contain only letters, numbers, or underscores.");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      alert("Enter a valid email address!");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters long!");
      return;
    }

    console.log("Registration Successful!", formData);
    alert(`Registration Successful! Welcome, ${username}`);

    // Clear form after successful registration
    setFormData({ username: "", email: "", password: "" });
  };

  // Login Validation & Submission
  const handleLogin = (e) => {
    e.preventDefault();
    const { username, password } = loginData;

    if (!username || !password) {
      alert("All fields are required!");
      return;
    }

    console.log("Login Successful!", loginData);
    alert(`Welcome back, ${username}!`);
  };

  // Google Login
  const handleGoogleSuccess = (response) => {
    const decodedToken = jwtDecode(response.credential);
    console.log("Google User:", decodedToken);
    alert(`Welcome, ${decodedToken.name}!`);
  };

  const handleGoogleFailure = () => {
    console.log("Google Login Failed!");
    alert("Google Login Failed. Try again.");
  };

  return (
    <div className="auth-container">
      <div className={`auth-box ${isLogin ? "login-mode" : ""}`}>
        <div className="auth-slider"></div>

        {/* Registration Form */}
        {!isLogin && (
          <div className="auth-section register">
            <h2>Registration</h2>
            <form onSubmit={handleRegister}>
              <div className="input-container">
                <i className="fas fa-user"></i>
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>
              <div className="input-container">
                <i className="fas fa-envelope"></i>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="input-container">
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <button type="submit">Register</button>
            </form>
            <p>
              Already have an account? <span onClick={() => setIsLogin(true)}>Login</span>
            </p>
          </div>
        )}

        {/* Login Form */}
        {isLogin && (
          <div className="auth-section login">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
              <div className="input-container">
                <i className="fas fa-user"></i>
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={loginData.username}
                  onChange={(e) => handleChange(e, true)}
                />
              </div>
              <div className="input-container">
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={loginData.password}
                  onChange={(e) => handleChange(e, true)}
                />
              </div>
              <button type="submit">Login</button>
            </form>

            <div className="google-auth">
              <p>or</p>
              <GoogleLogin onSuccess={handleGoogleSuccess} onError={handleGoogleFailure} />
            </div>

            <p>
              Don't have an account? <span onClick={() => setIsLogin(false)}>Register</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;