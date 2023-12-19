const requestHelper = require("../utils/request.helper");
const currencyService = require("../services/currency.service");

exports.all = async (req, res, next) => {
  try {
    const data = await currencyService.getAll(req.params.tenantId);

    return res.status(200)
      .send(requestHelper.getResponse(true, null, null, data));
  } catch (exception) {
    next(exception.message);

    return false;
  }
};

exports.listing = async (req, res, next) => {
  try {
    const data = await currencyService.getListing(req.params);

    return res.status(200)
      .send(requestHelper.getResponse(true, null, null, data));
  } catch (exception) {
    next(exception.message);

    return false;
  }
};

exports.get = async (req, res, next) => {
  try {
    const data = await currencyService.get(req.params.id);

    return res.status(200)
      .send(requestHelper.getResponse(true, null, null, data));
  } catch (exception) {
    next(exception.message);

    return false;
  }
};

exports.add = async (req, res, next) => {
  try {
    await currencyService.add(req.body);

    return res.status(200)
      .send(requestHelper.getResponse(true, "Currency added successfully"));
  } catch (exception) {
    next(exception.message);

    return false;
  }
};

exports.update = async (req, res, next) => {
  try {
    await currencyService.update(req.params.id, req.body);

    return res.status(200)
      .send(requestHelper.getResponse(true, "Currency updated successfully"));
  } catch (exception) {
    next(exception.message);

    return false;
  }
};
