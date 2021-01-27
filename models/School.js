const mongoose = require('mongoose');

const SchoolSchema = new mongoose.Schema({
  id_etab: {
    type: Number,
  },
  etab: {
    type: String,
    required: true,
  },
  sector: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'sector',
  },
});

module.exports = mongoose.model('school', SchoolSchema);
