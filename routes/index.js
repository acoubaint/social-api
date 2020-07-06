var express = require('express');
var router = express.Router();
const { users } = require('../models/index');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Social API' });
});

module.exports = router;
