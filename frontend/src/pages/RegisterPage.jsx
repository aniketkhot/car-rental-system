import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5001/api/auth/register", formData);
      navigate("/login"); // Redirect to login after success
    } catch (err) {
      alert("Registration failed: " + (err.response?.data?.error || err.message));
    }
  };

  return (
    <div className="container mt-5">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input name="fullName" className="form-control mb-2" placeholder="Full Name" onChange={handleChange} required />
        <input name="email" type="email" className="form-control mb-2" placeholder="Email" onChange={handleChange} required />
        <input name="password" type="password" className="form-control mb-2" placeholder="Password" onChange={handleChange} required />
        <button className="btn btn-primary">Register</button>
      </form>
    </div>
  );
}

export default RegisterPage;
