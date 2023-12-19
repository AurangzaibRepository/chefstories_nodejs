const db = require("../models");
const formatHelper = require("../utils/format.helper");
const currencyHelper = require("../utils/currency.helper");

exports.getAll = async (tenantId) => {
  const data = await db.currencies.scope("orderName").findAll({
    where: {
      tenant_id: tenantId,
    },
    attributes: ["id", "name"],
  });

  return data;
};

exports.getListing = async (parameters) => {
  const pageSize = parseInt(process.env.PAGE_SIZE, 10);
  const offset = (parameters.pageNumber * pageSize) - pageSize;
  const condition = currencyHelper.prepareCondition(parameters);

  const recordCount = await db.currencies.count({ where: condition });

  const data = await db.currencies.scope("defaultScope", "orderLatest", "limit").findAll({
    where: condition,
    offset,
  });

  return formatHelper.formatListing(parameters.pageNumber, recordCount, data);
};

exports.get = async (id) => db.currencies.findByPk(id);

exports.add = async (parameters) => db.currencies.create(parameters);

exports.update = async (id, parameters) => {
  await db.currencies.update(parameters, {
    where: {
      id,
    },
  });
};
