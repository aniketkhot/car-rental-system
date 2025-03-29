import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CarList from "./components/CarList";
import CustomerList from "./components/CustomerList";
import RentalList from "./components/RentalList";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Navbar from "./components/Navbar";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <div className="container mt-4">
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/" element={<LoginPage />} />
            <Route
              path="/cars"
              element={<PrivateRoute element={<CarList />} />}
            />
            <Route
              path="/customers"
              element={<PrivateRoute element={<CustomerList />} />}
            />
            <Route
              path="/rentals"
              element={<PrivateRoute element={<RentalList />} />}
            />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
