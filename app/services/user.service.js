const db = require("../models");
const userHelper = require("../utils/user.helper");
const formatHelper = require("../utils/format.helper");

exports.getAll = async (tenantId) => {
  const condition = {};

  if (tenantId) {
    condition.tenant_id = tenantId;
  }

  const data = await db.users.scope("orderName").findAll({
    where: condition,
    attributes: ["id",
      [db.sequelize.fn("Concat", db.sequelize.col("first_name"), " ", db.sequelize.col("last_name")), "name"],
    ],
  });

  return data;
};

exports.getListing = async (parameters) => {
  const pageSize = parseInt(process.env.PAGE_SIZE, 10);
  const offset = (parameters.pageNumber * pageSize) - pageSize;
  const condition = userHelper.prepareCondition(parameters.keyword);
  const recordCount = await db.users.count({ where: condition });

  const data = await db.users.scope("defaultScope", "orderLatest", "limit")
    .findAll({
      where: condition,
      offset,
    });

  return formatHelper.formatListing(parameters.pageNumber, recordCount, data);
};

exports.add = async (parameters) => {
  await db.users.create(parameters);
};

exports.update = async (id, parameters) => {
  /* await db.users.update(parameters, {
    where: {
      id,
    },
  }); */

  // Use this approach in order to trigger beforeUpdate hook
  db.users.findByPk(id)
    .then((record) => {
      record.update(parameters);
    });
};
