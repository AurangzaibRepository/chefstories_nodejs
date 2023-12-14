const db = require("../models");

exports.getAll = async () => {
  const data = await db.users.findAll({
    attributes: ["id", "first_name"],
    order: [
      ["id", "DESC"],
    ],
  });

  return data;
};
