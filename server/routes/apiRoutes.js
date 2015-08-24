var express = require('express');
var router = express.Router();
var Puppy = require('../models/puppies');//don't need .js as in puppies.js
var tempPuppyArray = [];

var bartPuppy = new Puppy(1, 'Bart', 20);
var johnPuppy = new Puppy(2, 'John', 10);
var danPuppy = new Puppy(3, 'Dan', 4);

tempPuppyArray.push(bartPuppy, johnPuppy, danPuppy);

router.get('/puppies', function(req, res, next) {
  res.json(tempPuppyArray);
});

router.get('/puppy/:id', function(req, res, next) {
  var pup = tempPuppyArray.filter(function(puppy){
    return puppy.puppyID === +req.params.id;
  });
  if (pup.length > 0){
    res.json(pup[0]);
  } else {
    res.json("Puppy does not exist here");
  }
});

router.post('/puppies', function(req, res, next){
  //does the puppy already exist
  var pup = tempPuppyArray.filter(function(puppy){
    return puppy.puppyID === +req.body.puppyID;
  });
  console.log(pup);
  //if yes,throw error
  if (pup.length > 0){
    res.json({message: "Puppy already exists!"});
  } else { //if no, return success
    var newPostPuppy = new Puppy(+req.body.puppyID, req.body.puppyName, +req.body.puppyAge);
    tempPuppyArray.push(newPostPuppy);
    res.json({
      message:'success',
      puppy:newPostPuppy
    });
  }
  console.log(tempPuppyArray);
});

module.exports = router;

//res.json does not exit out
//parseInt = floors num ??
//parseFloat = floats num to whole num?
