const db = require("../models");

exports.prepareCondition = (keyword) => {
  let condition = {};

  if (keyword) {
    condition = {
      name: {
        [db.Sequelize.Op.substring]: keyword,
      },
    };
  }

  return condition;
};
