import React from "react";
import { BrowserRouter as Router, Route, Routes, NavLink, Navigate } from "react-router-dom";
import CarList from "./components/CarList";

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">Car Rental System</NavLink>
          <div className="collapse navbar-collapse show">
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
          <Route path="/customers" element={<div className="text-light">Customers page coming soon</div>} />
          <Route path="/rentals" element={<div className="text-light">Rentals page coming soon</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
