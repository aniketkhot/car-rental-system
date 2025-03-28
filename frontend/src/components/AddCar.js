import React, { useState } from "react";
import axios from "axios";

function AddCar({ onCarAdded }) {
  const [formData, setFormData] = useState({
    make: "",
    model: "",
    year: "",
    registrationNumber: "",
    available: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5001/api/cars", formData)
      .then((res) => {
        onCarAdded(); // Refresh list
        setFormData({
          make: "",
          model: "",
          year: "",
          registrationNumber: "",
          available: true,
        });
      })
      .catch((err) => console.error("Error adding car:", err));
  };

  return (
    <div className="card p-4 mb-4">
      <h4>Add New Car</h4>
      <form onSubmit={handleSubmit}>
        <div className="row mb-2">
          <div className="col">
            <input
              className="form-control"
              type="text"
              name="make"
              placeholder="Make"
              value={formData.make}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col">
            <input
              className="form-control"
              type="text"
              name="model"
              placeholder="Model"
              value={formData.model}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="row mb-2">
          <div className="col">
            <input
              className="form-control"
              type="number"
              name="year"
              placeholder="Year"
              value={formData.year}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col">
            <input
              className="form-control"
              type="text"
              name="registrationNumber"
              placeholder="Registration Number"
              value={formData.registrationNumber}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-check mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            name="available"
            checked={formData.available}
            onChange={handleChange}
          />
          <label className="form-check-label">Available</label>
        </div>

        <button className="btn btn-primary" type="submit">
          Add Car
        </button>
      </form>
    </div>
  );
}

export default AddCar;
