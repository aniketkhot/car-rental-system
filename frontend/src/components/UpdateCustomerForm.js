import React, { useState, useEffect } from "react";
import axios from "axios";

const UpdateCustomerForm = ({ customer, onUpdate, onCancel }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: ""
  });

  useEffect(() => {
    if (customer) {
      setFormData({
        fullName: customer.fullName,
        email: customer.email,
        phone: customer.phone,
        address: customer.address
      });
    }
  }, [customer]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5001/api/customers/${customer._id}`, formData);
      onUpdate();
    } catch (err) {
      console.error("Failed to update customer", err);
    }
  };

  return (
    <div className="modal show fade d-block" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <form onSubmit={handleSubmit}>
            <div className="modal-header">
              <h5 className="modal-title">Edit Customer</h5>
              <button type="button" className="btn-close" onClick={onCancel}></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <input
                  className="form-control"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Full Name"
                />
              </div>
              <div className="mb-3">
                <input
                  className="form-control"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                />
                                <input
                  className="form-control"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                />
                <input
                  className="form-control"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Address"
                />
              </div>
            </div>
            <div className="modal-footer">
              <button type="submit" className="btn btn-primary">Save</button>
              <button type="button" className="btn btn-secondary" onClick={onCancel}>Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateCustomerForm;
