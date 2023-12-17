const requestHelper = require("../utils/request.helper");
const currencyService = require("../services/currency.service");

exports.all = async (req, res) => {
  try {
    const data = await currencyService.getAll(req.params.tenantId);

    return res.status(200)
      .send(requestHelper.getResponse(true, null, null, data));
  } catch (exception) {
    return res.status(500)
      .send(requestHelper.getResponse(false, null, exception.message));
  }
};

exports.get = async (req, res) => {
  try {
    const data = await currencyService.get(req.params.id);

    return res.status(200)
      .send(requestHelper.getResponse(true, null, null, data));
  } catch (exception) {
    return res.status(500)
      .send(requestHelper.getResponse(false, null, exception.message));
  }
};
