const db = require("../models");

exports.getAll = async (tenantId) => {
  const condition = {};

  if (tenantId) {
    condition.tenant_id = tenantId;
  }

  const data = await db.users.findAll({
    where: condition,
    attributes: ["id",
      [db.sequelize.fn("Concat", db.sequelize.col("first_name"), " ", db.sequelize.col("last_name")), "name"],
    ],
    order: [
      ["id", "DESC"],
    ],
  });

  return data;
};
