var express = require('express');
var router = express.Router();
var { userController } = require('../controllers/index');

const multer = require('multer') // v1.0.5
const upload = multer({ // for parsing multipart/form-data
  dest: 'uploads/'
})

router.get('/', userController.list);
router.post('/', upload.array('file'), userController.store);
module.exports = router;