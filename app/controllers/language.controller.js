const languageService = require("../services/language.service");
const requestHelper = require("../utils/request.helper");

exports.all = async (req, res, next) => {
  try {
    const data = await languageService.getAll(req.params.tenantId);

    return res.status(200)
      .send(requestHelper.getResponse(true, null, null, data));
  } catch (exception) {
    next(exception.message);

    return false;
  }
};

exports.listing = (req, res, next) => {
  try {
    return res.status(200)
      .send(requestHelper.getResponse(true));
  } catch (exception) {
    next(exception.message);

    return false;
  }
};

exports.get = (req, res, next) => {
  try {
    return res.status(200)
      .send(requestHelper.getResponse(true));
  } catch (exception) {
    next(exception.message);

    return false;
  }
};

exports.add = (req, res, next) => {
  try {
    return res.status(200)
      .send(requestHelper.getResponse(true));
  } catch (exception) {
    next(exception.message);

    return false;
  }
};

exports.update = (req, res, next) => {
  try {
    return res.status(200)
      .send(Request.getResponse(true));
  } catch (exception) {
    next(exception.message);

    return false;
  }
};
