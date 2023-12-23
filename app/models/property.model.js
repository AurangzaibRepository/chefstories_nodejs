module.exports = (sequelize, Sequelize) => {
  const Property = sequelize.define("property", {
    name: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    position: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING(100),
      allowNull: false,  
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
    defaultScope: {
      attributes: {
        exclude: ["created_at", "updated_at"],
      },
    },
  });

  // Scopes
  Property.addScope("limit", {
    limit: parseInt(process.env.PAGE_SIZE, 10),
  });

  Property.addScope("orderName", {
    order: [
      ["name"],
    ],
  });

  Property.addScope("orderLatest", {
    order: [
      ["id", "DESC"],
    ],
  });

  return Property;
};
