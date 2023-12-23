const requestHelper = require("../utils/request.helper");

exports.all = (req, res, next) => {
  try {
    return res.send(requestHelper.getResponse(true));
  } catch (exception) {
    next(exception.message);

    return false;
  }
};

exports.listing = (req, res, next) => {
  try {
    return res.send(requestHelper.getResponse(true));
  } catch (exception) {
    next(exception.message);

    return false;
  }
};

exports.get = (req, res, next) => {
  try {
    return res.send(requestHelper.getResponse(true));
  } catch (exception) {
    next(exception.message);

    return false;
  }
};

exports.add = (req, res, next) => {
  try {
    return res.send(requestHelper.getResponse(true, "Property added successfully"));
  } catch (exception) {
    next(exception.message);

    return false;
  }
};

exports.update = (req, res, next) => {
  try {
    return res.send(requestHelper.getResponse(true, "Property updated successfully"));
  } catch (exception) {
    next(exception.message);

    return false;
  }
};
