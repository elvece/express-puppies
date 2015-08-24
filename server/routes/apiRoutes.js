var express = require('express');
var router = express.Router();
var Puppy = require('../models/puppies');//don't need .js as in puppies.js
var tempPuppyArray = [];

var newPuppy = new Puppy(1, 'bart', 20);

router.get('/puppies', function(req, res, next) {
  console.log(newPuppy);
  // res.json({});
});

module.exports = router;
