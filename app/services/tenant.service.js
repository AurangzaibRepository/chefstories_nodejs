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

exports.add = async (parameters, fileName) => {
  const data = { ...parameters, ...{ logo: fileName } };

  await db.tenants.create(data);
};

exports.update = async (id, parameters) => {
  await db.tenants.update(parameters, {
    where: {
      id,
    },
  });
};
