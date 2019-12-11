const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const personsInHouse = req.body.personsInHouse;
  const location = req.body.location;
  const houseSize = req.body.houseSize;

  const newUser = new User({
    personsInHouse,
    location,
    houseSize,
  });

  newUser.save()
  .then(() => res.json('User added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
