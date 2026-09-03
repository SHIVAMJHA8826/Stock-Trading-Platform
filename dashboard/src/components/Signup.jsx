import React, { useState } from "react";
import axios from "axios";

const Signup = ({ switchToLogin }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3002/signup", {
        username,
        email,
        password,
      });
      setSuccess("Account created successfully! You can now log in.");
      setError("");
      setTimeout(() => {
        switchToLogin();
      }, 1500);
    } catch (err) {
      setError(err.response?.data?.error || "Signup failed");
      setSuccess("");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "100px auto", padding: "30px", boxShadow: "0 0 10px rgba(0,0,0,0.1)", borderRadius: "8px" }}>
      <h2>Register for Trading Platform</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
      <form onSubmit={handleSignup}>
        <div style={{ marginBottom: "15px" }}>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>
        <button type="main" style={{ width: "100%", padding: "10px", background: "#387ed1", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer" }}>
          Sign Up
        </button>
      </form>
      <p style={{ marginTop: "15px", textAlign: "center" }}>
        Already have an account?{" "}
        <span 
          onClick={switchToLogin} 
          style={{ color: "#387ed1", cursor: "pointer", textDecoration: "underline" }}
        >
          Login here
        </span>
      </p>
    </div>
  );
};

export default Signup;