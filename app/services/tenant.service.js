const db = require("../models");

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
