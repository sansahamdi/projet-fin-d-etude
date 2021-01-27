const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema({
  note: {
    type: Number,
    required: true,
  },
  inspector: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "inspector",
  },
  enseignant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "enseignant",
  },
  nature: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Note = mongoose.model("note", NoteSchema);
