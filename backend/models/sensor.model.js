const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const sensorSchema = new Schema({

  type: { type: String, required: true },
  value: { type: String, required: true },
  userID: { type: String, required: true },
  creationDate: { type: Date, required: true },
}, {
  timestamps: true,
});

const Sensor = mongoose.model('Sensor', sensorSchema);

module.exports = Sensor;
