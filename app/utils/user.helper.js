const db = require("../models");

const { Op } = db.Sequelize;

exports.prepareCondition = (keyword) => {
  let condition = {};

  if (keyword) {
    condition = {
      [Op.or]: [
        {
          first_name: {
            [Op.substring]: keyword,
          },
        },
        {
          last_name: {
            [Op.substring]: keyword,
          },
        },
      ],
    };
  }

  return condition;
};
