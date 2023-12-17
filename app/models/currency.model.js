module.exports = (sequelize, Sequelize) => {
  const Currency = sequelize.define("currency", {
    name: {
      type: Sequelize.STRING(30),
      allowNull: false,
    },
    short_name: {
      type: Sequelize.STRING(30),
      allowNull: false,
    },
    symbol: {
      type: Sequelize.STRING(5),
      allowNull: false,
    },
    factor: Sequelize.INTEGER,
    tenant_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    created_at: Sequelize.DATEONLY,
    updated_at: Sequelize.DATEONLY,
  }, {
    createdAt: "created_at",
    updatedAt: "updated_at",
  });

  return Currency;
};
