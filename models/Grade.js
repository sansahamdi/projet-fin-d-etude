const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GradeSchema = new Schema({
  grade: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('grade', GradeSchema);
