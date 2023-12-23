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
    defaultScope: {
      attributes: {
        exclude: ["created_at", "updated_at"],
      },
    },
  });

  // Add scopes
  propertyValue.addScope("limit", {
    limit: parseInt(process.env.PAGE_SIZE, 10),
  });

  propertyValue.addScope("orderName", {
    order: [
      ["name"],
    ],
  });

  return propertyValue;
};
