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
