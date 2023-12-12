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

exports.add = async (parameters, file) => {
  let data = parameters;

  if (file) {
    data = { ...parameters, ...{ logo: file.originalname } };
  }

  await db.tenants.create(data);
};

exports.update = async (id, parameters) => {
  await db.tenants.update(parameters, {
    where: {
      id,
    },
  });
};
