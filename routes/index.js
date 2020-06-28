var express = require('express');
var router = express.Router();
var db = require('../models/index').sequelize;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Social API' });
});

module.exports = router;
