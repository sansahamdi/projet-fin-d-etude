const mongoose = require('mongoose');

const SchoolEnsSchema = new mongoose.Schema({
  enseignant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'enseignant',
  },
  school: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'school',
  },
  year: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model('school_ens', SchoolEnsSchema);
