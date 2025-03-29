import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
  Navigate,
  useNavigate,
} from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
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
                        <button className="btn btn-link nav-link" 
                                onClick={() =>{
                                  handleLogout();
                                  
                                  } }>
                          Logout
                        </button>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </nav>
  );
}

export default Navbar;
