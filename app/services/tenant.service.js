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
  const data = parameters;

  if (file) {
    data.logo = file.originalname;
  }

  await db.tenants.create(data);
};

exports.update = async (id, parameters, file) => {
  const data = parameters;

  if (file) {
    data.logo = file.originalname;
  }

  await db.tenants.update(data, {
    where: {
      id,
    },
  });
};
