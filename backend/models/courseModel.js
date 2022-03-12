// modules
const mongoose = require ('mongoose');

// course schema
const courseSchema = new mongoose.Schema (
  {
    name: {
      type: String,
      required: true,
      unique: true,
      minlength: [3, 'Name must contain 3 letters at least'],
      maxlength: [30, 'Name can not contain more than 30 letters'],
    },
    describtion: {
      type: String,
      required: true,
      minlength: [10, 'Describtion must contain 10 letters at least'],
      maxlength: [300, 'Describtion can not contain more than 300 letters'],
    },
    suits: {
      type: Number,
      default: 10,
    },
  },
  {timestamps: true}
);

// exports
module.exports = mongoose.model ('Course', courseSchema);
