const router = require('express').Router();
let Sensor = require('../models/sensor.model');

router.route('/').get((req, res) => {
  Sensor.find()
    .then(sensors => res.json(sensors))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const userID = req.body.userID;
  const location = req.body.location;
  const creationDate = Date.parse(req.body.creationDate);

  const newSensor = new Sensor({
    userID,
    location,
    creationDate,
  });

  newSensor.save()
  .then(() => res.json('Sensor added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Sensor.findById(req.params.id)
    .then(sensors => res.json(sensors))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Sensors.findByIdAndDelete(req.params.id)
    .then(() => res.json('Sensors deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Sensors.findById(req.params.id)
    .then(Sensors => {
      Sensors.userID = req.body.userID;
      Sensors.location = req.body.location;
      Sensors.date = req.body.date;

      Sensors.save()
        .then(() => res.json('Sensors updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
