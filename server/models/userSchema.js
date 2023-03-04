const mongoose = require('mongoose');
Schema = mongoose.Schema;

//blueprint for user data
const UserSchema = new Schema(
  {
    picture: {
      type: String,
      trim: true,
      default: '',
    },
    name: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
      required: true,
    },
    admin: {
      type: Boolean,
      default: false,
    },
    password: {
      type: String,
      trim: true,
      required: true,
    },
    github: {
      type: String,
      trim: true,
      default: '',
    },
    linkedin: {
      type: String,
      trim: true,
      default: '',
    },
    website: {
      type: String,
      trim: true,
      default: '',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('User', UserSchema);
