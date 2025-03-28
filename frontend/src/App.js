import React from "react";
import { BrowserRouter as Router, Route, Routes, NavLink, Navigate } from "react-router-dom";
import CarList from "./components/CarList";
import CustomerList from "./components/CustomerList";
import RentalList from "./components/RentalList";


function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">Car Rental System</NavLink>
          <div className="navbar-nav ms-auto">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/cars">Cars</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/customers">Customers</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/rentals">Rentals</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Navigate to="/cars" replace />} />
          <Route path="/cars" element={<CarList />} />
          <Route path="/customers" element={<CustomerList />} />
          <Route path="/rentals" element={<RentalList />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
