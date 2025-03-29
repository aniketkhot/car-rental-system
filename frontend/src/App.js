import React, { useContext } from "react";

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import CarList from "./components/CarList";
import CustomerList from "./components/CustomerList";
import RentalList from "./components/RentalList";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { AuthProvider, AuthContext } from "./context/AuthContext";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <AuthProvider>
        <Navbar />
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
      </AuthProvider>
    </Router>
  );
}

export default App;
