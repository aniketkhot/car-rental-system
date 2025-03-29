import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes, NavLink, Navigate } from "react-router-dom";

import CarList from "./components/CarList";
import CustomerList from "./components/CustomerList";
import RentalList from "./components/RentalList";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

import { AuthContext } from "./context/AuthContext";


function App() {
  const { user, logout } = useContext(AuthContext);

  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            Car Rental System
          </NavLink>
          <div className="d-flex ms-auto">
            <ul className="navbar-nav">
              {user && (
                <>
                  <li className="nav-item">
                    <span className="nav-link">Welcome, {user.name}</span>
                  </li>

                  <li className="nav-item">
                    <NavLink className="nav-link" to="/cars">
                      Cars
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/customers">
                      Customers
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/rentals">
                      Rentals
                    </NavLink>
                  </li>
                </>
              )}

              {!user ? (
                <>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/login">
                      Login
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/register">
                      Register
                    </NavLink>
                  </li>
                </>
              ) : (
                <>

                  <li className="nav-item">
                    <button className="btn btn-link nav-link" onClick={logout}>
                      Logout
                    </button>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-4">
        <Routes>
          <Route
            path="/"
            element={
              user ? (
                <Navigate to="/cars" replace />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          {user && (
            <>
              <Route path="/cars" element={<CarList />} />
              <Route path="/customers" element={<CustomerList />} />
              <Route path="/rentals" element={<RentalList />} />
            </>
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
