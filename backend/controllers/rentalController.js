const Rental = require("../models/Rental");

// Create a new rental
exports.createRental = async (req, res) => {
  try {
    const rental = new Rental(req.body);
    const savedRental = await rental.save();
    res.status(201).json(savedRental);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all rentals
exports.getRentals = async (req, res) => {
  try {
    const rentals = await Rental.find()
      .populate("customer", "fullName email")
      .populate("car", "make model registrationNumber");
    res.json(rentals);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get rental by ID
exports.getRentalById = async (req, res) => {
  try {
    const rental = await Rental.findById(req.params.id)
      .populate("customer", "fullName email")
      .populate("car", "make model registrationNumber");
    if (!rental) return res.status(404).json({ message: "Rental not found" });
    res.json(rental);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update rental
exports.updateRental = async (req, res) => {
  try {
    const updatedRental = await Rental.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedRental);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete rental
exports.deleteRental = async (req, res) => {
  try {
    await Rental.findByIdAndDelete(req.params.id);
    res.json({ message: "Rental deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
