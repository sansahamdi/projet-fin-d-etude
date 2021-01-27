const mongoose = require("mongoose");

const InspectorSchema = new mongoose.Schema({
  inspector: {
    type: String,
    required: true,
  },
});

module.exports = Inspector = mongoose.model("inspector", InspectorSchema);
