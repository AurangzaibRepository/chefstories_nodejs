const requestHelper = require("../utils/request.helper");

exports.listing = (req, res) => {
  try {
    return res.status(200)
      .send(requestHelper.getResponse(true, "Listing goes here"));
  } catch (exception) {
    return res.status(500)
      .send(requestHelper.getResponse(false, null, exception.message));
  }
};

exports.add = (req, res) => {
  try {
    return res.status(200)
      .send(requestHelper.getResponse(true, "Tenant added successfully"));
  } catch (exception) {
    return res.status(500)
      .send(requestHelper.getResponse(false, null, exception.message));
  }
};
