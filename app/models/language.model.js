module.exports = (sequelize, Sequelize) => {
  const Language = sequelize.define("langauge", {
    name: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    localization: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    iso_code: {
      type: Sequelize.STRING(20),
      allowNull: false,
    },
    is_default: {
      type: Sequelize.ENUM(1, 0),
      defaultValue: 0,
    },
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

  return Language;
};
