var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/puppy/:id', function(req, res, next) {
  console.log(req.params.id);
  res.render('puppy');
});



module.exports = router;
