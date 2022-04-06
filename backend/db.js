const mongoose = require('mongoose');
const dbUrl = 'mongodb://localhost:27017/emp-management'; 

mongoose.connect(dbUrl, (err) => {
  if (!err) {
    console.log('DB Connection Successful!');
  } else {
    console.error('DB Connection Error ' + err);
  }
})

module.exports = mongoose;