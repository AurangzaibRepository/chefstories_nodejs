module.exports = (sequelize, Sequelize) => {
  const propertyValue = sequelize.define("propertyValue", {
    name: {
      type: Sequelize.STRING(70),
      allowNull: false,
    },
    position: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    created_at: Sequelize.DATEONLY,
    updated_at: Sequelize.DATEONLY,
  }, {
    tableName: "property_values",
    createdAt: "created_at",
    updatedAt: "updated_at",
  });

  return propertyValue;
};
