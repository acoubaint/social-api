const userController = new class {
  async list(req, res, next) {
    res.send("user list");
  }

  async store(req, res, next) {
    res.send(req.files);
  }
}

module.exports = userController;