const mongoose = require("mongoose");

const EnseignantSchema = new mongoose.Schema({
  id_unique: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  cin: {
    type: Number,
  },
  dateOfBirth: {
    type: Date,
  },
  placeOfBirth: {
    type: String,
  },
  sexe: {
    type: String,
  },
  adresse: {
    type: String,
  },
  phone: {
    type: Number,
  },
  email: {
    type: String,
    required: true,
  },
  civil_status: {
    type: String,
  },
  children: {
    type: Number,
  },
  recruitement_date: {
    type: Date,
  },
  grade: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "grade",
  },
  level: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "level",
  },
  situation: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "situation",
  },
  speciality: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "speciality",
  },
  img: {
    type: String,
  },
  status: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("enseignant", EnseignantSchema);
