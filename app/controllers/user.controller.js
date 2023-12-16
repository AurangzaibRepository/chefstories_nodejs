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

exports.listing = async (req, res) => {
  try {
    const data = await userService.getListing(req.params);

    return res.status(200)
      .send(requestHelper.getResponse(true, null, null, data));
  } catch (exception) {
    return res.status(500)
      .send(requestHelper.getResponse(false, null, exception.message));
  }
};

exports.get = async (req, res) => {
  try {
    const data = await userService.get(req.params.id);

    return res.status(200)
      .send(requestHelper.getResponse(true, null, null, data));
  } catch (exception) {
    return res.status(500)
      .send(requestHelper.getResponse(false, null, exception.message));
  }
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

exports.update = async (req, res) => {
  try {
    await userService.update(req.params.id, req.body);

    return res.status(200)
      .send(requestHelper.getResponse(true, "User updated successfully"));
  } catch (exception) {
    return res.status(500)
      .send(requestHelper.getResponse(false, null, exception.message));
  }
};
