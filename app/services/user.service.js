const db = require("../models");

exports.getAll = async (tenantId) => {
  const condition = {};

  if (tenantId) {
    condition.tenant_id = tenantId;
  }

  const data = await db.users.findAll({
    where: condition,
    attributes: ["id", "first_name"],
    order: [
      ["id", "DESC"],
    ],
  });

  return data;
};
