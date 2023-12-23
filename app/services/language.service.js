const db = require("../models");
const formatHelper = require("../utils/format.helper");
const languageHelper = require("../utils/language.helper");

exports.getAll = async (tenantId) => {
  const data = await db.languages.scope("orderName").findAll({
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
  const condition = languageHelper.prepareCondition(parameters);
  const recordCount = await db.languages.count({where: condition});

  const data = await db.languages.scope("defaultScope", "orderLatest", "limit")
    .findAll({
      where: condition,
      offset,
    });

  return formatHelper.formatListing(parameters.pageNumber, recordCount, data);
};

exports.get = async (id) => {
  const data = await db.languages.findByPk(id);

  return data;
};

exports.add = async (parameters) => {
  await db.languages.create(parameters);
};

exports.update = async (id, parameters) => {
  await db.languages.update(parameters, {
    where: {
      id,
    },
  });
};
