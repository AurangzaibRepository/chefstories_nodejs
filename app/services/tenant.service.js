const db = require("../models");
const tenantHelper = require("../utils/tenant.helper");
const formatHelper = require("../utils/format.helper");

exports.getAll = async () => {
  const data = await db.tenants.scope("orderName").findAll({
    attributes: ["id", "name"],
  });

  return data;
};

exports.getListing = async (parameters) => {
  const pageSize = parseInt(process.env.PAGE_SIZE, 10);
  const offset = (parameters.pageNumber * pageSize) - pageSize;

  const condition = tenantHelper.prepareCondition(parameters.keyword);
  const recordCount = await db.tenants.count({ where: condition });

  const data = await db.tenants.scope("defaultScope", "limit", "orderLatest")
    .findAll({
      where: condition,
      offset,
    });

  return formatHelper.formatListing(parameters.pageNumber, recordCount, data);
};

exports.get = async (id) => db.tenants.findByPk(id);

exports.add = async (parameters, file) => {
  const data = parameters;

  if (file) {
    data.logo = file.originalname;
  }

  await db.tenants.create(data);
};

exports.update = async (id, parameters, file) => {
  const data = parameters;

  if (file) {
    data.logo = file.originalname;
  }

  await db.tenants.update(data, {
    where: {
      id,
    },
  });
};
