const tenantService = require("../services/tenant.service");
const requestHelper = require("../utils/request.helper");

exports.all = async (req, res) => {
  try {
    const data = await tenantService.getAll();

    return res.status(200)
      .send(requestHelper.getResponse(true, null, null, data));
  } catch (exception) {
    return res.status(500)
      .send(requestHelper.getResponse(false, null, exception.message));
  }
};

exports.listing = async (req, res) => {
  try {
    const data = await tenantService.getListing(req.params);

    return res.status(200)
      .send(requestHelper.getResponse(true, null, null, data));
  } catch (exception) {
    return res.status(500)
      .send(requestHelper.getResponse(false, null, exception.message));
  }
};

exports.get = async (req, res) => {
  try {
    const data = await tenantService.get(req.params.id);

    return res.status(200)
      .send(requestHelper.getResponse(true, null, null, data));
  } catch (exception) {
    return res.status(500)
      .send(requestHelper.getResponse(false, null, exception.message));
  }
};

exports.add = async (req, res) => {
  try {
    await tenantService.add(req.body, req.file);

    return res.status(200)
      .send(requestHelper.getResponse(true, "Tenant added successfully"));
  } catch (exception) {
    return res.status(500)
      .send(requestHelper.getResponse(false, null, exception.message));
  }
};

exports.update = async (req, res) => {
  try {
    await tenantService.update(req.params.id, req.body, req.file);

    return res.status(200)
      .send(requestHelper.getResponse(true, "Tenant updated successfully"));
  } catch (exception) {
    return res.status(500)
      .send(requestHelper.getResponse(false, null, exception.message));
  }
};
