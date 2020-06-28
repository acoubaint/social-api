var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var db = mysql.createConnection({
  host: 'localhost',
  user: 'croot',
  password: '1234',
  database: 'peradiweb'
});

db.connect();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/members/:temp', (req, res, next) => {
  let temp = null;
  db.query('select * from users', (err, rows, fields) => {
    res.send({params: req.params, rows, fields});
  });
});

module.exports = router;
