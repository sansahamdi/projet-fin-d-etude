const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SituationSchema = new Schema({
  situation: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('situation', SituationSchema);
