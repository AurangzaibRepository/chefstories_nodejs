const requestHelper = require("../utils/request.helper");

exports.all = (req, res) => {
  try {
    return res.status(200)
      .send(requestHelper.getResponse(true));
  } catch (exception) {
    return res.status(500)
      .send(requestHelper.getResponse(false, null, exception.data));
  }
};
