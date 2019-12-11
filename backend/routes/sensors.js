const router = require('express').Router();
let Sensor = require('../models/sensor.model');

router.route('/').get((req, res) => {
  Measure.find()
    .then(measures => res.json(measures))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const type = req.body.type;
  const value = req.body.value;
  const userID = req.body.userID;
  const creationDate = Date.parse(req.body.creationDate);

  const newSensor = new Sensor({
    type,
    value,
    userID,
    creationDate,
  });

  newSensor.save()
  .then(() => res.json('sensor added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Sensor.findById(req.params.id)
    .then(measure => res.json(measure))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Measure.findByIdAndDelete(req.params.id)
    .then(() => res.json('Measure deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Measure.findById(req.params.id)
    .then(measure => {
      measure.type = req.body.type;
      measure.value = req.body.value;
      measure.userID = Number(req.body.userID);
      measure.creationDate = Date.parse(req.body.creationDate);

      measure.save()
        .then(() => res.json('measure updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
