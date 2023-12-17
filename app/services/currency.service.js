const db = require("../models");

exports.getAll = async (tenantId) => {
  const data = await db.currencies.scope("orderName").findAll({
    where: {
      tenant_id: tenantId,
    },
    attributes: ["id", "name"],
  });

  return data;
};

exports.get = async (id) => db.currencies.findByPk(id);
