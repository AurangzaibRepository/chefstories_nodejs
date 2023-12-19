const tenantService = require("../services/tenant.service");
const requestHelper = require("../utils/request.helper");

exports.all = async (req, res, next) => {
  try {
    const data = await tenantService.getAll();

    return res.status(200)
      .send(requestHelper.getResponse(true, null, null, data));
  } catch (exception) {
    next(exception.message);

    return false;
  }
};

exports.listing = async (req, res, next) => {
  try {
    const data = await tenantService.getListing(req.params);

    return res.status(200)
      .send(requestHelper.getResponse(true, null, null, data));
  } catch (exception) {
    next(exception.message);

    return false;
  }
};

exports.get = async (req, res, next) => {
  try {
    const data = await tenantService.get(req.params.id);

    return res.status(200)
      .send(requestHelper.getResponse(true, null, null, data));
  } catch (exception) {
    next(exception.message);

    return false;
  }
};

exports.add = async (req, res, next) => {
  try {
    await tenantService.add(req.body, req.file);

    return res.status(200)
      .send(requestHelper.getResponse(true, "Tenant added successfully"));
  } catch (exception) {
    next(exception.message);

    return false;
  }
};

exports.update = async (req, res, next) => {
  try {
    await tenantService.update(req.params.id, req.body, req.file);

    return res.status(200)
      .send(requestHelper.getResponse(true, "Tenant updated successfully"));
  } catch (exception) {
    next(exception.message);

    return false;
  }
};
