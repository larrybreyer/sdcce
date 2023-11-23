import mongoose from 'mongoose';

const EmployeeSchema = new mongoose.Schema({
  name: String,
  extension: Number,
  email: String,
  title: String,
  dateHired: { type: Date, default: Date.now },
  currentlyEmployed: Boolean
});

export default EmployeeSchema;

// vim: ai ts=2 et nu

