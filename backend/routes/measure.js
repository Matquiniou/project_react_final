const router = require('express').Router();
let Measure = require('../models/measure.model');

router.route('/').get((req, res) => {
  Measure.find()
    .then(measures => res.json(measures))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const type = req.body.type;
  const value = req.body.value;
  const sensorID = Number(req.body.sensorID);
  const creationDate = Date.parse(req.body.creationDate);

  const newMeasure = new Measure({
    type,
    value,
    sensorID,
    creationDate,
  });

  newMeasure.save()
  .then(() => res.json('measure added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Measure.findById(req.params.id)
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
      measure.sensorID = Number(req.body.sensorID);
      measure.creationDate = Date.parse(req.body.creationDate);

      measure.save()
        .then(() => res.json('measure updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
