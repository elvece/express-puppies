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
    res.json({message: "Puppy does not exist here"});
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

router.put('/puppy/:id', function(req, res, next){
  //add validation for chekcking if the puppyAge is an integer
    //if exists, and not an integer, throw an error

  var pup = tempPuppyArray.filter(function(puppy){
    return puppy.puppyID === +req.params.id;
  });

  if (pup.length > 0){
    //grab object from array
    for (var i = 0; i < tempPuppyArray.length; i++) {
      if (tempPuppyArray[i].puppyID === +req.params.id){
        //looping through keys in object
        for (key in req.body) {//these keys are strings irl
          if (key === 'puppyName'){
            tempPuppyArray[i].puppyName = req.body.puppyName;
          } else if (key === 'puppyAge') {
            tempPuppyArray[i].puppyAge = req.body.puppyAge;
          }
        }
      }
    }
    res.send(tempPuppyArray);
    //update specific keys
    //push back into the array

  } else {
    res.json("Puppy does not exist here");
  }
});

router.delete('/puppy/:id', function(req, res, next){
  var pup = tempPuppyArray.filter(function(puppy){
    return puppy.puppyID === +req.params.id;
  });
  if (pup.length > 0){
    for (var i = 0; i < tempPuppyArray.length; i++) {
      if (tempPuppyArray[i].puppyID === +req.params.id){
        var tempPuppy = tempPuppyArray.splice(i, 1);
        res.send({
          message: 'That puppy is gone!',
          puppy: tempPuppy
        });
      }
    }
  } else {
    res.json("Puppy does not exist here");
  }
});



module.exports = router;

//loop through objects with for, in
//res.json does not exit out
//parseInt = floors num ??
//parseFloat = floats num to whole num?

