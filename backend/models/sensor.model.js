const mongoose = require('mongoose');

const Schema = mongoose.Schema;

  const sensorSchema = new Schema({
    userID: { type: String, required: true },
    location: { type: String, required: true },
    creationDate: { type: Date, required: true },
  }, {
  timestamps: true,
});

const Sensor = mongoose.model('Sensor', sensorSchema);

module.exports = Sensor;
