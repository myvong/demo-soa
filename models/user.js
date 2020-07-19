const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username : String,
  password : String
}, {
  collection: 'user'
});

module.exports = User = mongoose.models.User || mongoose.model('User', userSchema);