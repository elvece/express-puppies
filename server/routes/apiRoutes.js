var express = require('express');
var router = express.Router();

router.get('/puppies', function(req, res, next) {
  res.json();
});

module.exports = router;
