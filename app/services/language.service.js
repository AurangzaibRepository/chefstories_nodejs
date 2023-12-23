const db = require("../models");

exports.getAll = async (tenantId) => {
  const data = await db.languages.scope("orderName").findAll({
    where: {
      tenant_id: tenantId,
    },
    attributes: ["id", "name"],
  });

  return data;
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
