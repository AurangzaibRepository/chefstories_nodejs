const formatHelper = require("../utils/format.helper");

module.exports = (sequelize, Sequelize) => {
  const Tenant = sequelize.define("tenant", {
    name: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
    logo: { 
      type: Sequelize.STRING(50),
      get() {
        const rawValue = this.getDataValue("logo");
        return (rawValue ? formatHelper.formatImagePath(`tenants/${rawValue}`) : rawValue);
      },
    },
    status: {
      type: Sequelize.ENUM("Active", "Inactive"),
      defaultValue: "Active",
    },
    navigation_text: Sequelize.STRING(30),
    navigation_position: Sequelize.INTEGER,
    listing_type: Sequelize.ENUM("area_wine", "country_wine"),
    created_at: Sequelize.DATEONLY,
    updated_at: Sequelize.DATEONLY,
  }, {
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    defaultScope: {
      attributes: {
        exclude: ["created_at", "updated_at"],
      },
    },
    scopes: {
      limit: {
        limit: parseInt(process.env.PAGE_SIZE, 10),
      },
      orderLatest: {
        order: [
          ["id", "DESC"],
        ],
      },
      orderName: {
        order: [
          ["name"],
        ],
      },
    },
  });

  return Tenant;
};
