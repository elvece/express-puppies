var express = require('express');
var router = express.Router();
var utility = require('../logic/puppyUtility');//don't need .js

//GET - all pupppies
router.get('/puppies', function(req, res, next) {
  var response = utility.handleAllGet();
  res.json(response);
});

//GET - single puppy
router.get('/puppy/:id', function(req, res, next) {
  var response = utility.handleSingleGet(req.params.id);
  res.json(response);
});

//POST - single puppy
router.post('/puppies', function(req, res, next){
  var response = utility.handlePost(req.body.puppyID, req.body.puppyName, req.body.puppyAge);
  if (response.error)
    //refactor for correct error message
    res.status(500).json(response);
  else
    res.json(response);
});

//PUT - single puppy
router.put('/puppy/:id', function(req, res, next){
  var response = utility.handlePut(req.params.id, req.body);
  res.json(response);
});

//DELETE - single puppy
router.delete('/puppy/:id', function(req, res, next){
  var response = utility.handleDelete(req.params.id);
  res.json(response);
});



module.exports = router;

//loop through objects with for, in
//res.json does not exit out
//parseInt = floors num ??
//parseFloat = floats num to whole num?

