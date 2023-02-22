const mongoose = require('mongoose');

//blueprint for todo data
const BlogSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    image: {
      type: String,
      trim: true,
      required: true,
    },
    heading: {
      type: String,
      trim: true,
      required: true,
    },
    subHeading: {
      type: String,
      trim: true,
    },
    text: {
      type: String,
      trim: true,
      required: true,
    },
    tags: {
      type: Array,
      required: true,
    },
    likes: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Blog', BlogSchema);
