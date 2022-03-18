import mongoose from "mongoose";

export const registrantSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true,
  },
  country: {
    type: String,
    required: true
  }
})