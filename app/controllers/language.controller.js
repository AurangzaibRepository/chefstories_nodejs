const requestHelper = require("../utils/request.helper");

exports.all = (req, res, next) => {
  try {
    return req.status(200)
      .send(requestHelper.getResponse(true));
  } catch (exception) {
    next(exception.message);

    return false;
  }
};
