const userService = require("../services/user.service");
const requestHelper = require("../utils/request.helper");

exports.all = async (req, res) => {
  try {
    const data = await userService.getAll(req.params.tenantId);

    return res.status(200)
      .send(requestHelper.getResponse(true, null, null, data));
  } catch (exception) {
    return res.status(500)
      .send(requestHelper.getResponse(false, null, exception.message));
  }
};

exports.listing = (req, res) => {

};

exports.add = async (req, res) => {
  try {
    await userService.add(req.body);

    return res.status(200)
      .send(requestHelper.getResponse(true, "User added successfully"));
  } catch (exception) {
    return res.status(500)
      .send(requestHelper.getResponse(false, null, exception.message));
  }
};

exports.update = (req, res) => {

};
