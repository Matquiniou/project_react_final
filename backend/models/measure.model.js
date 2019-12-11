const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const measureSchema = new Schema({

  type: { type: String, required: true },
  value: { type: String, required: true },
  sensorID: { type: String, required: true },
  creationDate: { type: Date, required: true },
}, {
  timestamps: true,
});

const Measure = mongoose.model('Measure', measureSchema);

module.exports = Measure;
