import React, { useEffect, useState } from "react";
import axios from "axios";
import AddCar from "./AddCar";

function CarList() {
  const [cars, setCars] = useState([]);

  const fetchCars = () => {
    axios
      .get("http://localhost:5001/api/cars")
      .then((res) => setCars(res.data))
      .catch((err) => console.error("Error fetching cars:", err));
  };

  useEffect(() => {
    fetchCars();
  }, []);

  return (
    <div className="container mt-4">
      <h2>Car List</h2>
      <AddCar onCarAdded={fetchCars} />

      {cars.length === 0 ? (
        <p>No cars found.</p>
      ) : (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Make</th>
              <th>Model</th>
              <th>Year</th>
              <th>Registration</th>
              <th>Available</th>
            </tr>
          </thead>
          <tbody>
            {cars.map((car) => (
              <tr key={car._id}>
                <td>{car.make}</td>
                <td>{car.model}</td>
                <td>{car.year}</td>
                <td>{car.registrationNumber}</td>
                <td>{car.available ? "Yes" : "No"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default CarList;
