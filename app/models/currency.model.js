module.exports = (sequelize, Sequelize) => {
  const Currency = sequelize.define("currency", {
    name: {
      type: Sequelize.STRING(20),
      allowNull: false,
    },
    short_name: {
      type: Sequelize.STRING(10),
      allowNull: false,
    },
    symbol: {
      type: Sequelize.STRNG(5),
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
