const userService = require("../services/user.service");
const requestHelper = require("../utils/request.helper");

exports.all = async (req, res, next) => {
  try {
    const data = await userService.getAll(req.params.tenantId);

    return res.status(200)
      .send(requestHelper.getResponse(true, null, null, data));
  } catch (exception) {
    next(exception.message);

    return false;
  }
};

exports.listing = async (req, res, next) => {
  try {
    const data = await userService.getListing(req.params);

    return res.status(200)
      .send(requestHelper.getResponse(true, null, null, data));
  } catch (exception) {
    next(exception.message);

    return false;
  }
};

exports.get = async (req, res, next) => {
  try {
    const data = await userService.get(req.params.id);

    return res.status(200)
      .send(requestHelper.getResponse(true, null, null, data));
  } catch (exception) {
    next(exception.message);

    return false;
  }
};

exports.add = async (req, res, next) => {
  try {
    await userService.add(req.body);

    return res.status(200)
      .send(requestHelper.getResponse(true, "User added successfully"));
  } catch (exception) {
    next(exception.message);

    return false;
  }
};

exports.update = async (req, res, next) => {
  try {
    await userService.update(req.params.id, req.body);

    return res.status(200)
      .send(requestHelper.getResponse(true, "User updated successfully"));
  } catch (exception) {
    next(exception.message);

    return false;
  }
};
