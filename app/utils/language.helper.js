const db = require("../models");

const { Op } = db.Sequelize;

exports.prepareCondition = (parameters) => {
  let condition = {
    tenant_id: parameters.tenantId,
  };

  if (parameters.keyword) {
    const keywordCondition = {
      [Op.or]: [
        {
          name: {
            [Op.substring]: parameters.keyword,
          },
        },
        {
          iso_code: {
            [Op.substring]: parameters.keyword,
          },
        },
      ],
    };

    condition = { ...condition, ...keywordCondition };
  }

  return condition;
};
