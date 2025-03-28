const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  make: { type: String, required: true },
  model: { type: String, required: true },
  year: { type: Number, required: true },
  registrationNumber: { type: String, required: true, unique: true },
  available: { type: Boolean, default: true }
});

module.exports = mongoose.models.Car || mongoose.model("Car", carSchema);

