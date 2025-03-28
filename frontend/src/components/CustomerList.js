import React, { useState, useEffect } from "react";
import axios from "axios";

function CustomerList() {
  const [customers, setCustomers] = useState([]);
  const [newCustomer, setNewCustomer] = useState({
    fullName: "",
    email: "",
  });

  
  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      const res = await axios.get("http://localhost:5001/api/customers");
      setCustomers(res.data);
    } catch (err) {
      console.error("Error fetching customers:", err);
    }
  };

  const handleChange = (e) => {
    setNewCustomer({ ...newCustomer, [e.target.name]: e.target.value });
  };

  const handleAddCustomer = async () => {
    try {
      await axios.post("http://localhost:5001/api/customers", newCustomer);
      setNewCustomer({ fullName: "", email: "" });
      fetchCustomers();
    } catch (err) {
      console.error("Error adding customer:", err);
    }
  };

  return (
    <div>
      <h2>Customer List</h2>
      <div className="card p-3 mb-4">
        <h5>Add New Customer</h5>
        <input
          type="text"
          className="form-control mb-2"
          name="fullName"
          placeholder="Full Name"
          value={newCustomer.fullName}
          onChange={handleChange}
        />
        <input
          type="email"
          className="form-control mb-2"
          name="email"
          placeholder="Email"
          value={newCustomer.email}
          onChange={handleChange}
        />
        <button className="btn btn-primary" onClick={handleAddCustomer}>
          Add Customer
        </button>
      </div>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((cust) => (
            <tr key={cust._id}>
              <td>{cust.fullName}</td>
              <td>{cust.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CustomerList;
