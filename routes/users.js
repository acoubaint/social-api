var express = require('express');
var router = express.Router();
var { users } = require('../models/index');

const multer = require('multer') // v1.0.5
const upload = multer({ // for parsing multipart/form-data
  dest: 'uploads/'
})

/* GET users listing. */
router.get('/', async function(req, res, next) {
  try {
    let data = await users.findAll();
    res.send(data);
  } catch (error) {
    res.send("error"+ JSON.stringify(error));
  }
});

router.post('/', upload.array('file'), async (req, res, next) => {
  res.send(req.files);
});

module.exports = router;
