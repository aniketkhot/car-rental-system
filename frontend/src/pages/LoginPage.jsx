import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function LoginPage() {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5001/api/auth/login", {
        email,
        password,
      });
      login(res.data.user, res.data.token);
      navigate("/cars");
    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input className="form-control mb-2" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required />
        <input className="form-control mb-2" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" type="password" required />
        <button className="btn btn-primary" type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
