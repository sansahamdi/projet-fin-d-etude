const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const PostSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "enseignant",
  },
  name: {
    type: String,
    required: true,
  },
  comment: [
    {
      text: {
        type: String,
      },
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ensaignants",
      },
      name: {
        type: String,
      },
    },
  ],
  like: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ensaignants",
      },
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
});

PostSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("posts", PostSchema);
