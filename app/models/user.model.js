module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    first_name: {
      type: Sequelize.STRING(20),
      allowNull: false,
    },
    last_name: {
      type: Sequelize.STRING(20),
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING(80),
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING(100),
    },
    role: {
      type: Sequelize.ENUM("super admin", "admin", "user"),
      allowNull: false,
    },
    api_token: {
      type: Sequelize.STRING(100),
    },
    status: {
      type: Sequelize.ENUM("Active", "Inactive"),
      defaultValue: "Active",
    },
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

  return User;
};
