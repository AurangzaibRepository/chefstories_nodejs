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
