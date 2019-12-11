const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    location: { type: String, required: true },
    personsInHouse: { type: Number, required: true },
    houseSize: { type: String, required: true },
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
