var express = require('express');
var router = express.Router();
var { users } = require('../models/index');
var userController = require('../controllers/user-controller');

const multer = require('multer') // v1.0.5
const upload = multer({ // for parsing multipart/form-data
  dest: 'uploads/'
})

/* GET users listing. */
router.get('/', userController.list);
router.post('/', upload.array('file', 5), userController.store);

module.exports = router;
