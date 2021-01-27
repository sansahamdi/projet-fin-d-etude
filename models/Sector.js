const mongoose = require('mongoose');

const ArrodissementSchema = new mongoose.Schema({
  sector: {
    type: String,
    required: true,
  },
  city: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'city',
  },
  inspector: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'inspector',
  },
});

module.exports = Inspector = mongoose.model('sector', ArrodissementSchema);
