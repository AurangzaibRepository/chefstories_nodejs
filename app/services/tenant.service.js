const db = require("../models");

exports.getAll = async () => {
  const data = await db.tenants.findAll({
    attributes: ["id", "name"],
    order: [
      ["name"],
    ],
  });

  return data;
};

exports.add = async (parameters) => {
  await db.tenants.create(parameters);
};

exports.update = async (id, parameters) => {
  await db.tenants.update(parameters, {
    where: {
      id,
    },
  });
};
