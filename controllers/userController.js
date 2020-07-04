const { users } = require('../models/index');

const userController = new class {
  async list(req, res, next) {
    let response = {};
    try {
      response.data = await users.findAll();
      response.success = true;
    } catch (error) {
      response.success = false;
      response.error = error;
    }
    res.send(response);
  }

  async store(req, res, next) {
    // res.send({ body: req.body, file: req.files });
    const user = await users.create(req.body);
    res.send(user);
  }
}

module.exports = userController;