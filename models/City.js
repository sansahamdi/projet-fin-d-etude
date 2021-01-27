const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CitySchema = new Schema({
  city: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('city', CitySchema);
