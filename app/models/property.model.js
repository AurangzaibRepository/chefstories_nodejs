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

  return Property;
};
