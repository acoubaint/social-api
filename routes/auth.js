var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var { users } = require('../models/index');
var { userController } = require('../controllers/index');

router.post('/login', async (req, res, next) => {
  try {
    users.findOne({ where: { username: req.body.username } }).then((user) => {
      let response = {};
      response.success = user.comparePassword(req.body.password);
      response.data = user;
      response.token = jwt.sign({ id: user.id }, '5[]5|/-\L-/-\p|', { expiresIn: '1h' }); // expiresIn: '1h' = expiresIn: 60 * 60
      res.send(response);
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.toString()
    });
  }
});

module.exports = router;