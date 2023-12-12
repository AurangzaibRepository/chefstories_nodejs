const requestHelper = require("../utils/request.helper");

exports.listing = (req, res) => {
  try {
    return res.send(requestHelper.getResponse(
      true,
      "Listing goes here",
    ));
  } catch (exception) {
    return res.send(requestHelper.getResponse(
      false,
      null,
      exception.message,
    ));
  }
};
