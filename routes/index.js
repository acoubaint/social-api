var express = require('express');
var router = express.Router();
var db = require('../database/sequelize/connection');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/members/:temp', async (req, res, next) => {
  try {
    await db.authenticate();
    res.send('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});

module.exports = router;
