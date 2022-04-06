const mongoose = require('mongoose');

const Empolyee = mongoose.model('Empolyee', {
  name: { type: String },
  position: { type: String },
  dept: { type: String }
})

module.exports = Empolyee;